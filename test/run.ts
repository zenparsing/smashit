import * as Path from 'node:path';

import { smashit } from '../smashit.js';

smashit({
  input: Path.resolve(import.meta.dirname, 'b.ts'),
  output: Path.resolve(import.meta.dirname, '../out/foo.js'),
});
