const path = require("path");
const webpack = require("webpack");
const name = require("./package.json").name
const webpack_rules = [];
const webpackOption = {
    entry: "./SinglyLinkedList.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `${name}.js`,
    },
    module: {
        rules: webpack_rules
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(babelLoader);
module.exports = webpackOption;