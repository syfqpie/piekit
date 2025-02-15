#!/usr/bin/env node
/**
 * generate.cjs - PieKit Template Generator
 *
 * Usage:
 *   node scripts/generate.cjs sandbox <ComponentName>
 *   node scripts/generate.cjs component <ComponentName>
 *
 * Commands:
 *   sandbox   - Generates a sandbox file under <root>/src/sandbox/<ComponentName>.tsx
 *   component - Generates a component template:
 *				1. Component file: <root>/src/components/<ComponentName>/<ComponentName>.tsx
 *				2. Test file:      <root>/src/components/<ComponentName>/<ComponentName>.test.tsx
 *				3. Updates index:  <root>/src/components/<ComponentName>/index.ts
 *				4. Type file:      <root>/src/types/<componentname>.ts
 */

const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)

if (args.length < 2 || (args[0] !== 'sandbox' && args[0] !== 'component')) {
	console.error('[PieKit Script] ⚠️  Usage: node scripts/generate.cjs <sandbox|component> <ComponentName>')
	process.exit(1)
}

const command = args[0]
const componentName = args[1]
const rootDir = path.resolve(__dirname, '..')

if (command === 'sandbox') {
	require('./generators/sandbox.cjs')(componentName, rootDir)
} else if (command === 'component') {
	require('./generators/component.cjs')(componentName, rootDir)
}
