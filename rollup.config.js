import resolve from 'rollup-plugin-node-resolve';
import shebang from 'rollup-plugin-preserve-shebang';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/entry.js',
    output: {
      file: 'bin/bundle.js',
      format: 'cjs',
    },
    plugins: [
      shebang(),
      resolve({
        preferBuiltins: true,
      }),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        externalHelpers: true,
      }),
      commonjs(),
    ],
  },
  {
    input: 'src/tinyPng/index.js',
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
    ],
  },
];
