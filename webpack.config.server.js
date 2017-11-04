const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack');

const Path = require('path');
const srcPath = Path.resolve(__dirname, 'src');
const distPath = Path.resolve(__dirname, 'dist');

let isProd = process.env.NODE_ENV === "production";
console.log('your environment is:', process.env.NODE_ENV);

module.exports = {
    context: srcPath,
    entry: './server/index.js',
    output: {
        path: distPath,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: Path.resolve(__dirname, 'src/shared/scss/'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                importLoaders: true,
                                localIdentName: '[name]',
                                modules: true,
                                minimize: true,
                                namedExport: true
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: Path.resolve(__dirname, 'src/shared/components/'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                importLoaders: true,
                                localIdentName: '[local]_[hash:base64:5]',
                                modules: true,
                                minimize: true,
                                namedExport: true
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
        ]
    },
    externals: nodeExternals(),
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new Webpack.NamedModulesPlugin()
    ]
};