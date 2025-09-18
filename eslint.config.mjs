import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([{
    ...js.configs.recommended,
    ...js.configs.all,
    languageOptions: {
        globals: {
            ...globals.mocha,
            ...globals.node,
        },
    },

    rules: {
        "comma-dangle": ["error", "only-multiline"],
        "newline-after-var": "off",
        "no-param-reassign": "off",
        "require-jsdoc": "off",
        strict: ["error", "never"],
        "valid-jsdoc": "off",
    },
}]);
