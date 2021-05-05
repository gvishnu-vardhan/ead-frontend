const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const webpack=require("webpack");
module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true,
		port: 3000,
	 },
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_module/,
				use: 'babel-loader'
			},
			{
				test: /\.css?$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.scss?$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|svg|gif|jpeg)?$/,
				loader: "file-loader",
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'url':JSON.stringify("http://20.62.64.135/"),
			
		  }),
	]	
};