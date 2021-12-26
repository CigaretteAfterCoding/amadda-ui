import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions,
      rootDir: '.',
      jail: '.',
      preferBuiltins: true,
    }),
    commonjs({
      include: ['.yarn/cache/**'],
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    url(),
    svgr(),
    json(),
  ],
  preserveModules: true,
  output: [
    {
      dir: 'dist/src',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
};
