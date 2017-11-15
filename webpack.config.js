const webpack = require('webpack'),
path = require('path'),
fs = require('fs'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin');
Dotenv = require('dotenv-webpack');

const debug = process.argv.indexOf('-p') === -1;

const config = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/bundle.js'
	},
	resolve: {
		extensions: ['.js','.jsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		host: '0.0.0.0',
		port: 9000,
		inline: true,
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css/,
				loaders: [
					{
						loader: 'style-loader',
					},
					{
						loader: "css-loader",
						options: {
							localIdentName: debug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
							module: false,
							sourceMap: debug,
							minimize: !debug
						}
					}
				],
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),
		new CopyWebpackPlugin([
			{ from: 'public/css', to: 'css' },
			{ from: 'public/fonts', to: 'fonts' },
			{ from: 'public/images', to: 'images' },
			{ from: 'public/favicon.ico', to: './' },
			{ from: 'public/manifest.json', to: './' }
		]),
		new Dotenv({ path: './.env', safe: false })
	]
};

if (!debug) {
	// TODO: ADD SOMETHING FOR PRODUCTION
} else {
	config.devtool = 'source-map';
}
module.exports = config;
