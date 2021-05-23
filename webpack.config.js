const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
    entry: {
        app: [
            "@babel/polyfill",
            path.join(__dirname, "client", "style.css"),
            path.join(__dirname, "client", "src", "start.js"),
        ],
        admin: [
            "@babel/polyfill",
            path.join(__dirname, "client", "style.css"),
            path.join(__dirname, "client", "src", "admin.js"),
        ],
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "client", "public"),
    },

    performance: {
        hints: false,
    },
    devServer: {
        contentBase: path.join(__dirname, "client", "public"),
        proxy: {
            "/": {
                target: "http://localhost:3001",
            },
            "/socket.io": {
                target: "http://localhost:3001",
                ws: true,
            },
        },
        port: "3000",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
    ],
});
