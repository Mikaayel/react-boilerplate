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
        new DashboardPlugin()
    ]
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const argv = require('yargs').argv;
// const DashboardPlugin = require('webpack-dashboard/plugin');

// const Webpack = require('webpack');
// const Path = require('path');

// console.log('webpack is running in', process.env.NODE_ENV);

// let config = {
//     entry: [
//         './src/app.js'
//     ],
//     output: {
//         path: Path.resolve(__dirname, 'dist'),
//         filename: 'app.bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 enforce: 'pre',
//                 test: /\.js$/,
//                 exclude: ['/node_modules/', '*.test.js'],
//                 use: 'eslint-loader'
//             },
//             {
//                 test: /\.scss$/,
//                 include: Path.resolve(__dirname, 'src/scss/'),
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         query: {
//                             modules: false,
//                             minimize: false,
//                             import: true
//                         }
//                     },
//                     {
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: function () {
//                                 return [
//                                     require('precss'),
//                                     require('autoprefixer')
//                                 ];
//                             }
//                         }
//                     },
//                     {
//                         loader: 'sass-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.scss$/,
//                 include: Path.resolve(__dirname, 'src/shared/'),
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         query: {
//                             modules: true,
//                             localIdentName: '[name]__[local]___[hash:base64:5]',
//                             minimize: false,
//                             import: true
//                         }
//                     },
//                     {
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: function () {
//                                 return [
//                                     require('precss'),
//                                     require('autoprefixer')
//                                 ];
//                             }
//                         }
//                     },
//                     {
//                         loader: 'sass-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader'
//             },
//             {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['react', 'es2015', 'stage-0']
//                 },
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules|bower_components|\.git)/
//             },
//             {
//                 test: /\.(png|svg|jpe?g|gif)$/i,
//                 include: Path.join(__dirname, 'src'),
//                 use: [
//                     'file-loader?name=[hash:12].[ext]&outputPath=images/',
//                     {
//                         loader: 'img-loader',
//                         options: {
//                             enabled: process.env.NODE_ENV === 'production',
//                             gifsicle: {
//                                 interlaced: false
//                             },
//                             mozjpeg: {
//                                 progressive: true,
//                                 arithmetic: false
//                             },
//                             optipng: false, // disabled
//                             pngquant: {
//                                 floyd: 0.5,
//                                 speed: 2
//                             },
//                             svgo: {
//                                 plugins: [
//                                     { removeTitle: true },
//                                     { convertPathData: false }
//                                 ]
//                             }
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     resolve: {
//         modules: [
//             Path.resolve(__dirname, "src/shared"),
//             'node_modules',
//         ],
//         extensions: ['.js', '.jsx']
//     },
//     devServer: {
//         contentBase: Path.join(__dirname, 'dist'),
//         compress: false,
//         hot: true,
//         port: 8080,
//         stats: "minimal",
//         open: false,
//         historyApiFallback: true
//     },
//     plugins: [
//         new Webpack.HotModuleReplacementPlugin(),
//         new Webpack.NoEmitOnErrorsPlugin(),
//         new HtmlWebpackPlugin({
//             title: 'React Boilerplate',
//             minify: {
//                 collapseWhitespace: true
//             },
//             hash: true,
//             template: './src/index.ejs',
//         }),
//         new ExtractTextPlugin({
//             filename: "app.bundle.css",
//             disable: true,
//             allChunks: true
//         }),
//         new Webpack.NamedModulesPlugin(),
//         new DashboardPlugin()
//     ]
// };

// module.exports = config;