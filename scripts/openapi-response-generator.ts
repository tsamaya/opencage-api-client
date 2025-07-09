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
  private generatedTypes = new Set<string>();

  constructor(private spec: OpenAPISpec) {
    this.schemas = spec.components?.schemas || {};
  }

  private resolveRef(ref: string): OpenAPISchema {
    const parts = ref.split('/');
    if (
      parts[0] === '#' &&
      parts[1] === 'components' &&
      parts[2] === 'schemas'
    ) {
      const schemaName = parts[3];
      return this.schemas[schemaName];
    }
    throw new Error(`Cannot resolve reference: ${ref}`);
  }

  private getTypeName(name: string): string {
    // Convert schema names to TypeScript naming convention
    return name.replace(/[^a-zA-Z0-9]/g, '');
  }

  private convertType(schema: OpenAPISchema): string {
    if (schema.$ref) {
      const refSchema = this.resolveRef(schema.$ref);
      const typeName = this.getTypeName(schema.$ref.split('/').pop() || '');

      // Generate the referenced type if not already generated
      if (!this.generatedTypes.has(typeName)) {
        this.generateType(typeName, refSchema);
      }

      return typeName;
    }

    if (schema.oneOf || schema.anyOf) {
      const schemas = schema.oneOf || schema.anyOf || [];
      return schemas.map((s) => this.convertType(s)).join(' | ');
    }

    if (schema.allOf) {
      return schema.allOf.map((s) => this.convertType(s)).join(' & ');
    }

    if (Array.isArray(schema.type)) {
      return schema.type.map((t) => this.mapScalarType(t, schema)).join(' | ');
    }

    const type = schema.type as string;

    switch (type) {
      case 'object':
        if (schema.properties) {
          return this.generateObjectType(schema);
        }
        return 'Record<string, any>';

      case 'array':
        if (schema.items) {
          return `${this.convertType(schema.items)}[]`;
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

  private generateObjectType(schema: OpenAPISchema): string {
    if (!schema.properties) return 'Record<string, any>';

    const props = Object.entries(schema.properties)
      .map(([key, propSchema]) => {
        const isRequired = schema.required?.includes(key) || false;
        const optional = isRequired ? '' : '?';
        const propType = this.convertType(propSchema);

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

  private generateType(name: string, schema: OpenAPISchema): string {
    if (this.generatedTypes.has(name)) {
      return '';
    }

    this.generatedTypes.add(name);

    const typeDefinition = this.convertType(schema);
    let comment = '';

    if (schema.description) {
      comment = `/**\n * ${schema.description}\n */\n`;
    }

    return `${comment}export interface ${name} ${typeDefinition}\n`;
  }

  public generateResponseTypes(): string {
    const output: string[] = [];

    // Generate the main Response type
    const responseSchema = this.schemas['Response'];
    if (responseSchema) {
      output.push(this.generateType('Response', responseSchema));
    }

    // Generate all referenced types
    const allTypes = Array.from(this.generatedTypes)
      .filter((name) => name !== 'Response')
      .map((name) => this.generateType(name, this.schemas[name] || {}))
      .filter(Boolean);

    return [...allTypes, ...output].join('\n');
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
const outputPath = process.argv[3] || 'GeocodingResponse.ts';

console.log(`Work in progress. the script is not yet complete.`);
generateTypesFromOpenAPI(yamlPath, outputPath);
