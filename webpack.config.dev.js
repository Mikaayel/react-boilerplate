const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const argv = require('yargs').argv;
const DashboardPlugin = require('webpack-dashboard/plugin');

const Webpack = require('webpack');
const Path = require('path');

console.log('webpack is running in', process.env.NODE_ENV);

let isProd = process.env.NODE_ENV === "production";

// let cssConfig = isProd ? cssProd : cssDev;

let config = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './src/app.js'
    ],
    externals: {
        jquery: 'jQuery' // allows foundation to use jquery methods.
    },
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: ['/node_modules/', '*.test.js'],
                use: 'eslint-loader'
            },
            {
                test: /\.scss$/,
                include: Path.resolve(__dirname, 'src/scss/'),
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
                include: Path.resolve(__dirname, 'src/components/'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
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
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                include: Path.join(__dirname, 'src'),
                use: [
                    'file-loader?name=[hash:12].[ext]&outputPath=images/',
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: process.env.NODE_ENV === 'production',
                            gifsicle: {
                                interlaced: false
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: false, // disabled
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    }
                ]
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
        compress: false,
        hot: true,
        port: 8080,
        stats: "minimal",
        open: false,
        historyApiFallback: true
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin(),
        new Webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            title: 'React Boilerplate',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.ejs',
        }),
        new ExtractTextPlugin({
            filename: "app.bundle.css",
            disable: true,
            allChunks: true
        }),
        new Webpack.NamedModulesPlugin(),
        new DashboardPlugin()
    ]
};

module.exports = config;