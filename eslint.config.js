// eslint.config.js
import globals from 'globals';
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
    {
        files: ["**/*.js"], // Apply this configuration to all .js files
        plugins: {
            js,
        },
        extends: ["js/recommended"], // Extend recommended ESLint rules
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.worker
            }
        },
        rules: {
            "no-unused-vars": "warn", // Custom rule: warn about unused variables
            "no-undef": "warn", // Custom rule: warn about undefined variables
        },
    },
    // You can add more configuration objects for different file types or overrides
]);
