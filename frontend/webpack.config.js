let path = require(`path`);
let HtmlWebpackPlugin = require(`html-webpack-plugin`);
let CopyWebpackPlugin = require('copy-webpack-plugin');
let { DefinePlugin, ProvidePlugin } = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');

let defaultConfigName = 'dev';
let config = process.env.NODE_ENV || defaultConfigName;
let distFolder = 'dist';

console.log(`CURRENT CONFIG: ${config}`);

module.exports = {
	entry: {
		main: path.join(__dirname, '/src/index.jsx')
	},
	output: {
		path: path.join(__dirname, `${distFolder}`),
		filename: '[name].[chunkhash].bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: path.join(__dirname, `${distFolder}`),
		port: 3000,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
					publicPath: '/'
				})
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					publicPath: '/'
				})
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: `index.html`,
			template: path.join(__dirname, './src/tpl/index.template.html')
		}),
		new DefinePlugin({
			'NODE_ENV': config,
			'__CONFIG__': JSON.stringify(require(`./src/js/config/${config}.config.js`))
		}),
		new ExtractTextPlugin(`[name].[chunkhash].css`),
		new ProvidePlugin({
			'&': 'jquery',
			'jQuery': 'jquery',
			'jquery': 'jquery'
		})
	],
	resolve: {
		alias: {
			'TodoExampleModule': path.resolve(__dirname, './src/js/components/features/todo-example/'),
			'PostsModule': path.resolve(__dirname, './src/js/components/features/posts'),
			'IndexModule': path.resolve(__dirname, './src/js/components/features/index'),
			'CommonModule': path.resolve(__dirname, './src/js/components/common')
		}
	}
};
