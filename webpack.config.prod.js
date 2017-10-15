const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const Webpack = require('webpack');
const Path = require('path');

let isProd = process.env.NODE_ENV === "production";

console.log('your environment is:', process.env.NODE_ENV);

let config = {
	entry: [
		'./src/app.js'
	],
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
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: function() {
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
					],
				})
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
									{removeTitle: true},
									{convertPathData: false}
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
	plugins: [
		new Webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'React Boilerplate',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template:  './src/index.ejs',
		}),
		new ExtractTextPlugin({
			filename: "app.bundle.css",
			disable: false,
			allChunks: true
		}),
		new Webpack.NamedModulesPlugin()
	]
};

module.exports = config;