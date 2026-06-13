import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import swc from '@rollup/plugin-swc';

let args = process.argv.slice(2);

export async function smashit(opts) {
  let { input, output } = opts;

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
