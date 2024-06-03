/**
 * Original script by James Milner for terra-draw (https://github.com/JamesLMilner/terra-draw)
 *
 * Adapted for my CHANGELOG's structure
 */

import { readFileSync } from 'fs';

const changelog = readFileSync('./CHANGELOG.md', 'utf-8');
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

if (!packageJson || !packageJson.version) {
  console.error('❌ Could not get current version from package.json');
  process.exit();
}

if (!changelog.startsWith('# Changelog')) {
  console.error('❌ Change log should start with changelog title');
  process.exit();
}

const version = `[${packageJson.version}]`;

console.log(`Version detected: ${version}`);

const changes = changelog.split('## ');

// console.log(changes);

if (!changes[2].startsWith(version)) {
  console.error('❌ Latest version is not latest change log title');
  process.exit();
}

if (changes.length === 0) {
  console.error('❌ No changes detected in change log');
  process.exit();
}

if (changes.length === 1) {
  console.error(
    '❌ Changelog appears invalid with only one change title and no entries'
  );
  process.exit();
}

if (changes[2].startsWith('[') && changes[3].startsWith('[')) {
  console.error('❌ Changelog should always have at least one change');
  process.exit();
}

const lastChanges = changelog.split('## [')[2];

const lastChangesTypes = lastChanges.split('### ');
lastChangesTypes.shift(); // Remove title

const lastGranularChanges = lastChanges.split('- ');

if (lastGranularChanges.length === 1) {
  console.error('❌ Changelog should always have at least one change per type');
  process.exit();
}

console.log(`Changelog for ${packageJson.version} is valid! ✅`);
console.log(
  `- ${lastGranularChanges.length - 1} changes of ${
    lastChangesTypes.length
  } types`
);
