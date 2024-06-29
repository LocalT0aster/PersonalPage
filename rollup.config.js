import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { globSync } from "glob";
import copy from "rollup-plugin-copy-enhanced";
import css from "rollup-plugin-import-css";

const files = globSync("src/*.ts", { ignore: "src/ripple.ts" }).map((file) => {
  let filename = file.split("\\").pop().split("/").pop().split(".").shift();
  return {
    input: file,
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [
      nodeResolve({ browser: true }),
      commonjs(),
      typescript(),
      strip(),
      terser(),
      css({ minify: true }),
      copy([`pages/${filename}.*`, `styles/${filename}.*`], { minify: true }),
    ],
    treeshake: {
      preset: "smallest",
    },
  };
});

export default files;
