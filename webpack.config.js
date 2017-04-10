const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require('webpack');
const Path = require('path');

let isProd = process.env.NODE_ENV === "production";
let cssDev = ['style-loader', 'css-loader', 'sass-loader'];
let cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});
let cssConfig = isProd ? cssProd : cssDev;

// disable deprecation messages?
process.noDeprecation = true;

module.exports = {
    entry: './src/app.js',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: cssConfig
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0']
                    },
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components|\.git)/
                }
            ]
    },
    resolve: {
        modules: [
            Path.resolve(__dirname, "src/components"),
            'node_modules',
        ],
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 3000,
        stats: "minimal",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boiler Plate V2.0',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template:  './src/index.ejs',
        }),
        new ExtractTextPlugin({
            filename: "app.bundle.css",
            disable: !isProd,
            allChunks: true
        }),
        new Webpack.HotModuleReplacementPlugin(

        ),
        new Webpack.NamedModulesPlugin(

        )
    ]
};
