import { defineConfig } from "oxlint";

export default defineConfig({
	options: {
		typeAware: true,
	},
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
		"arrow-body-style": ["warn", "as-needed"],
	},
});