import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/entry.js',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      externalHelpers: true,
    }),
    commonjs(),
    uglify(),
  ],
};
