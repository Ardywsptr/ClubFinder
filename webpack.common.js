const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    /**entry point */
    entry: "./src/app.js",
    /**output */
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    /**loader */
    module: {
        rules: [
            /* style dan css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ],
            },
        ],
    },
    /**plugin */
    plugins: [
        /** HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
};