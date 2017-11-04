const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const Webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const srcPath = Path.resolve(__dirname, 'src');
const distPath = Path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    entry: './client/index.js',
    output: {
        path: distPath,
        filename: 'client.js',
        publicPath: '/'
    },
    stats: {
        children: false,
        chunks: false,
        chunkModules: false,
        maxModules: 0
    },
    target: 'web',
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    devServer: {
        contentBase: distPath,
        compress: false,
        hot: true,
        port: 8080,
        stats: {
            children: false,
            chunks: false,
            chunkModules: false,
            warnings: false
        },
        open: false,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                include: Path.resolve(__dirname, 'src/shared/scss/'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: false,
                            minimize: false,
                            import: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: Path.resolve(__dirname, 'src/shared/components/'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]_[hash:base64:5]',
                            minimize: false,
                            import: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Boilerplate',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: 'shared/index.ejs'
        }),
        new Webpack.NamedModulesPlugin(),
        new DashboardPlugin()
    ]
};