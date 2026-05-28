#!/usr/bin/env node

import * as Path from 'node:path';
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import swc from '@rollup/plugin-swc';

let args = process.argv.slice(2);

async function build(input, output) {
  let bundle = await rollup({
    input,
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      swc(),
    ],
  });

  await bundle.write({
    file: output,
    format: 'esm',
  });

  await bundle.close();
}

let [input, output] = process.argv.slice(2);

if (!input) {
  throw new Error('Missing input path');
}

if (!output) {
  throw new Error('Missing output path');
}

build(Path.resolve(input), Path.resolve(output)).catch(console.error);
