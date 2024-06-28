import { nodeResolve } from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { globSync } from "glob";
import css from "rollup-plugin-import-css";

const files = globSync("src/*.ts", { ignore: "src/ripple.ts" }).map(
    (file) => {
        return {
            input: file,
            output: {
                dir: "dist",
                format: "es",
            },
            plugins: [
                nodeResolve({ browser: true }),
                typescript(),
                strip(),
                terser(),
                css({ minify: true }),
            ],
            treeshake: true,
        };
    }
);

export default files;
