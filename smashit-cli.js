#!/usr/bin/env node

import * as Path from 'node:path';
import { smashit } from './smashit.js';

let [input, output] = process.argv.slice(2);

if (!input) {
  throw new Error('Missing input path');
}

if (!output) {
  throw new Error('Missing output path');
}

smashit(
  Path.resolve(input),
  Path.resolve(output)
).catch(console.error);
