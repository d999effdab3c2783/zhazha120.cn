import { defineConfig } from "oxlint";

export default defineConfig({
    categories: {
        correctness: "warn",
    },
    plugins: ["typescript", "promise"],
    rules: {
        "no-await-in-loop": "warn",
        "promise/param-names": "warn",
        "promise/prefer-await-to-then": "warn",
        "require-await": "warn",
        "typescript/consistent-type-imports": "warn",
    },
});