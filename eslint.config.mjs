import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([{
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