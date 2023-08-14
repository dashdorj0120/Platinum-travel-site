const path = require("path");
const postCSSPlugins = [ require("postcss-import"),
require("postcss-mixins"),
require('postcss-simple-vars'), 
require("postcss-nested"), 
require("autoprefixer"),
];
module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        // before: function(app, server) {
        //     server._watch("./app/**/*.html");
        // },
        static: {
              directory: path.join(__dirname, "public/")
        },
        // contentBase: path.join(__dirname, "app"),
        hot: true,
        port: 3000,
        host: "0.0.0.0"
    },
    mode: 'development', 
    // watch: true,
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", {loader: 'postcss-loader', options:{postcssOptions: {plugins: postCSSPlugins}}}],
            },
        ],
    },
};