const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const typescript = require("@rollup/plugin-typescript");
const filesize = require("rollup-plugin-filesize");

const configBase = [
  {
    input: 'src/index.tsx',
    external: [],
    plugins: []
  }
];

module.exports = configBase;
