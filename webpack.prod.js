const { merge } = require ("webpack-merge");
const common = require ("./webpack.common");

module.exports = merge(common, {
    /**mode */
    mode: "production",
    /**loader */
    module: {
        rules: [
            /* babel loader */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        },
                    },
                ],
            },
        ],
    },
});