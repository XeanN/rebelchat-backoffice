const webpack = require('webpack'),
path = require('path'),
fs = require('fs'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin');

/* babel */
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"));
const config = {
	entry: [
		'./src/js/index.js'
	],
	module: {
		loaders: [
			{
				test: /\.jsx|.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: babelSettings
			}
		],
		noParse: [/autoit.js/]
	},
	resolve: {
		modulesDirectories:['./app','node_modules'],
		extensions: [
			'',
			'.js',
			'.jsx'
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/bundle.js'
	},
	// externals: {
	// 	"jquery": "jQuery"
	// },
	plugins: [

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
	]
};

if (process.env.NODE_ENV === 'development') {
	/*
	This config is for webpack-dev-server so overwrite the output path
	and add hotloader and server config
	*/
	config.devtool = "source-map";
	config.output.path = path.resolve(__dirname, 'public');
	config.entry.push('whatwg-fetch');
	config.entry.push('webpack-dev-server/client?http://localhost:3000');
	config.entry.push('webpack/hot/dev-server');

	config.module.loaders.unshift({
		test: /\.jsx|.js$/,
		exclude: /(node_modules)/,
		loader: 'react-hot'
	});
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	);
	config.devServer = {
		contentBase: path.resolve(__dirname, 'public'),
		hot: true,
		port: 3000
	};

} else {
	config.devtool = "source-map";
	config.plugins.push(
		new CopyWebpackPlugin([
			{from: 'public/css', to: 'css' },
			{from: 'public/fonts', to: 'fonts' },
			{from: 'public/images', to: 'images' },
			{from: 'public/js', to: 'js' },
			{from: 'public/favicon.ico', to: './' },
			{from: 'public/manifest', to: './' }
		])
	);
}

module.exports = config
