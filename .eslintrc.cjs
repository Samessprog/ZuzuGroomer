module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    "rules": {
        "prettier/prettier": 'warn',
        "no-undef": "warn",
        "no-multiple-empty-lines": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/space-before-function-paren": "warn",
        "padded-blocks": "warn",
        "react/react-in-jsx-scope": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/comma-dangle": "warn",
        "@typescript-eslint/triple-slash-reference": "warn"
    }
}
