import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

interface OpenAPISchema {
  type: string | string[];
  properties?: { [key: string]: OpenAPISchema };
  items?: OpenAPISchema;
  required?: string[];
  enum?: (string | number)[];
  format?: string;
  minimum?: number;
  maximum?: number;
  minItems?: number;
  maxItems?: number;
  description?: string;
  $ref?: string;
  oneOf?: OpenAPISchema[];
  anyOf?: OpenAPISchema[];
  allOf?: OpenAPISchema[];
}

interface OpenAPISpec {
  components?: {
    schemas?: { [key: string]: OpenAPISchema };
  };
}

class TypeScriptGenerator {
  private schemas: { [key: string]: OpenAPISchema } = {};
  private generatedTypes = new Map<string, string>();
  private typeCounter = 0;
  private anonymousTypeNames = new Map<string, string>();

  constructor(private spec: OpenAPISpec) {
    this.schemas = spec.components?.schemas || {};
  }

  private resolveRef(ref: string): { schema: OpenAPISchema; name: string } {
    const parts = ref.split('/');
    if (
      parts[0] === '#' &&
      parts[1] === 'components' &&
      parts[2] === 'schemas'
    ) {
      const schemaName = parts[3];
      return { schema: this.schemas[schemaName], name: schemaName };
    }
    throw new Error(`Cannot resolve reference: ${ref}`);
  }

  private getTypeName(name: string): string {
    // Convert schema names to TypeScript naming convention
    return name.replace(/[^a-zA-Z0-9]/g, '');
  }

  private createAnonymousTypeName(context: string): string {
    const baseName = context.replace(/[^a-zA-Z0-9]/g, '');
    return baseName.charAt(0).toUpperCase() + baseName.slice(1);
  }

  private shouldExtractAsInterface(schema: OpenAPISchema): boolean {
    // Extract as interface if it's an object with properties
    if (schema.type === 'object' && schema.properties) {
      const propCount = Object.keys(schema.properties).length;
      // Extract if it has multiple properties or nested objects
      return (
        propCount > 2 ||
        Object.values(schema.properties).some(
          (prop) => prop.type === 'object' && prop.properties
        )
      );
    }
    return false;
  }

  private convertType(schema: OpenAPISchema, context: string = ''): string {
    if (schema.$ref) {
      const { name: refName } = this.resolveRef(schema.$ref);
      const typeName = this.getTypeName(refName);

      // Ensure the referenced type is generated
      if (!this.generatedTypes.has(typeName)) {
        this.generateNamedType(typeName, this.schemas[refName]);
      }

      return typeName;
    }

    if (schema.oneOf || schema.anyOf) {
      const schemas = schema.oneOf || schema.anyOf || [];
      return schemas
        .map((s, i) => this.convertType(s, `${context}Option${i}`))
        .join(' | ');
    }

    if (schema.allOf) {
      return schema.allOf
        .map((s, i) => this.convertType(s, `${context}Part${i}`))
        .join(' & ');
    }

    if (Array.isArray(schema.type)) {
      return schema.type
        .map((t) => {
          if (t === 'null') return 'null';
          return this.mapScalarType(t, schema);
        })
        .join(' | ');
    }

    const type = schema.type as string;

    switch (type) {
      case 'object':
        if (schema.properties) {
          // Check if we should extract this as a separate interface
          if (this.shouldExtractAsInterface(schema) && context) {
            const typeName = this.createAnonymousTypeName(context);
            if (!this.generatedTypes.has(typeName)) {
              this.generateNamedType(typeName, schema);
            }
            return typeName;
          }
          return this.generateInlineObjectType(schema, context);
        }
        return 'Record<string, any>';

      case 'array':
        if (schema.items) {
          const itemContext = context ? `${context}Item` : 'Item';
          return `${this.convertType(schema.items, itemContext)}[]`;
        }
        return 'any[]';

      default:
        return this.mapScalarType(type, schema);
    }
  }

  private mapScalarType(type: string, schema: OpenAPISchema): string {
    switch (type) {
      case 'string':
        if (schema.enum) {
          return schema.enum.map((v) => `'${v}'`).join(' | ');
        }
        return 'string';

      case 'number':
      case 'integer':
        if (schema.enum) {
          return schema.enum.join(' | ');
        }
        return 'number';

      case 'boolean':
        return 'boolean';

      case 'null':
        return 'null';

      default:
        return 'any';
    }
  }

  private generateInlineObjectType(
    schema: OpenAPISchema,
    context: string
  ): string {
    if (!schema.properties) return 'Record<string, any>';

    const props = Object.entries(schema.properties)
      .map(([key, propSchema]) => {
        const isRequired = schema.required?.includes(key) || false;
        const optional = isRequired ? '' : '?';
        const propContext = `${context}${key.charAt(0).toUpperCase() + key.slice(1)}`;
        const propType = this.convertType(propSchema, propContext);

        // Handle keys with special characters
        const keyName = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : `'${key}'`;

        return `${keyName}${optional}: ${propType}`;
      })
      .join('; ');

    return `{ ${props} }`;
  }

  private generateObjectType(
    schema: OpenAPISchema,
    context: string = ''
  ): string {
    if (!schema.properties) return 'Record<string, any>';

    const props = Object.entries(schema.properties)
      .map(([key, propSchema]) => {
        const isRequired = schema.required?.includes(key) || false;
        const optional = isRequired ? '' : '?';
        const propContext = `${context}${key.charAt(0).toUpperCase() + key.slice(1)}`;
        const propType = this.convertType(propSchema, propContext);

        // Handle keys with special characters
        const keyName = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : `'${key}'`;

        let comment = '';
        if (propSchema.description) {
          comment = `  /** ${propSchema.description} */\n`;
        }

        return `${comment}  ${keyName}${optional}: ${propType};`;
      })
      .join('\n');

    return `{\n${props}\n}`;
  }

  private generateNamedType(name: string, schema: OpenAPISchema): void {
    if (this.generatedTypes.has(name)) {
      return;
    }

    // Mark as being processed to prevent infinite recursion
    this.generatedTypes.set(name, '');

    const typeDefinition = this.generateObjectType(schema, name);
    let comment = '';

    if (schema.description) {
      comment = `/** ${schema.description} */\n`;
    }

    const output = `${comment}export interface ${name} ${typeDefinition}`;
    this.generatedTypes.set(name, output);
  }

  private getAllSchemaNames(): string[] {
    return Object.keys(this.schemas);
  }

  public generateAllTypes(): string {
    // First, generate all top-level schema types
    const schemaNames = this.getAllSchemaNames();

    schemaNames.forEach((schemaName) => {
      const typeName = this.getTypeName(schemaName);
      const schema = this.schemas[schemaName];
      this.generateNamedType(typeName, schema);
    });

    // Return all generated types
    const orderedTypes: string[] = [];

    this.generatedTypes.forEach((typeStr) => {
      if (typeStr) {
        // Skip empty placeholders
        orderedTypes.push(typeStr);
      }
    });

    return orderedTypes.join('\n\n');
  }

  public generateResponseTypes(): string {
    // Generate the main Response type and all its dependencies
    const responseSchema = this.schemas['Response'];
    if (!responseSchema) {
      throw new Error('Response schema not found');
    }

    // Generate Response and all dependent types
    this.generateNamedType('Response', responseSchema);

    // Collect all generated types except Response
    const orderedTypes: string[] = [];

    this.generatedTypes.forEach((typeStr, typeName) => {
      if (typeStr && typeName !== 'Response') {
        orderedTypes.push(typeStr);
      }
    });

    // Add Response at the end
    const responseType = this.generatedTypes.get('Response');
    if (responseType) {
      orderedTypes.push(responseType);
    }

    return orderedTypes.join('\n\n');
  }
}

// Main function to generate TypeScript types
function generateTypesFromOpenAPI(
  yamlFilePath: string,
  outputPath?: string
): string {
  try {
    // Read and parse the YAML file
    const yamlContent = fs.readFileSync(yamlFilePath, 'utf8');
    const spec = yaml.load(yamlContent) as OpenAPISpec;

    // Generate TypeScript types
    const generator = new TypeScriptGenerator(spec);
    const typesContent = generator.generateResponseTypes();

    // Prepare the final output with imports and header
    const output = `// Generated TypeScript types from OpenAPI specification
// Source: ${path.basename(yamlFilePath)}
// Generated on: ${new Date().toISOString()}

${typesContent}`;

    // Write to file if output path is provided
    if (outputPath) {
      fs.writeFileSync(outputPath, output);
      console.log(`TypeScript types generated successfully: ${outputPath}`);
    }

    return output;
  } catch (error) {
    console.error('Error generating TypeScript types:', error);
    throw error;
  }
}

// Example usage
export { generateTypesFromOpenAPI, TypeScriptGenerator };

const yamlPath = process.argv[2] || 'openapi.yaml';
const outputPath = process.argv[3] || 'opencage-types.ts';

generateTypesFromOpenAPI(yamlPath, outputPath);
