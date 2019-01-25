"use strict";

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
}
const webpack = require("webpack");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const paths = require("./paths");
const fs = require("fs");

module.exports = {
    mode: "production",
    entry: [paths.appIndexJs],
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        path: paths.appBuild,
        filename: "js/bundle.[hash].js",
        chunkFilename: "js/[name].chunk.js",
        publicPath: "./",
        devtoolModuleFilenameTemplate: (info) =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
    },
    resolve: {
        modules: ["node_modules", paths.appNodeModules].concat(
            // It is guaranteed to exist because we tweak it in `env.js`
            (process.env.NODE_PATH || "").split(path.delimiter).filter(Boolean)
        ),
        extensions: [".js", ".json", ".jsx"],
        alias: {},
        plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])]
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: require.resolve("babel-loader")
            },
            {
                test: /\.css|\.less/,
                include: paths.appSrc,
                loader: ExtractTextPlugin.extract(
                    Object.assign({
                        fallback: require.resolve("style-loader"),
                        use: [
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    importLoaders: 1
                                }
                            },
                            {
                                loader: require.resolve("less-loader") // compiles Less to CSS
                            },
                            {
                                loader: require.resolve("postcss-loader"),
                                options: {
                                    ident: "postcss",
                                    plugins: () => [
                                        require("postcss-flexbugs-fixes"),
                                        require("autoprefixer")({
                                            browsers: [
                                                ">1%",
                                                "last 4 versions",
                                                "Firefox ESR",
                                                "not ie < 9"
                                            ],
                                            flexbox: "no-2009"
                                        }),
                                        require("postcss-px2rem")({
                                            remUnit: 100
                                        })
                                    ]
                                }
                            }
                        ],
                        publicPath: "./"
                    })
                )
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml
        }),
        new webpack.NamedModulesPlugin(),
        //new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "css/main.css"
        })
    ],
    optimization: {
        minimize: true
    },
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty"
    },
    performance: {
        hints: false
    }
};
