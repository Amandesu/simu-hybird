module.exports = {
    plugins: ["react", "jsx-a11y", "import"],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        }
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: require("path").resolve(
                    "./config/webpack.config.dev.js"
                )
            }
        }
    },
    rules: {
        semi: 0,
        "linebreak-style": 0,
        "react/display-name": 0,
        "react/prop-types": 0,
        "import/unambiguous": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0
    }
};
