import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.js",
    plugins: [terser()],
    output: {
      file: "umd/index.js",
      format: "umd",
      name: "stringModule",
      esModule: false
    }
  },
  {
    input: "index.js",
    output: {
      file: "esm/index.js",
      format: "esm"
    }
  }
];
