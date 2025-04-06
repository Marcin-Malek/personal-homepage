import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default defineConfig([{
	extends: compat.extends(
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended"
	),
	plugins: {
		react,
		"@typescript-eslint": typescriptEslint
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	languageOptions: {
		globals: {
			window: true,
			document: true,
			navigator: true,
			console: true
		},
		parser: tsParser,
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"comma-dangle": ["error", "never"],
		"react/jsx-max-props-per-line": [2, {
			maximum: {
				single: 3,
				multi: 1
			}
		}],
		"react/jsx-first-prop-new-line": [2, "multiline"]
	}
}]);