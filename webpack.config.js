/**
 * The module dependencies.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');

/**
 * Export the configuration.
 *
 * @type {Object}
 */
module.exports = {
	/**
	 * The base directory for resolving entry points.
	 */
	context: path.resolve(__dirname, 'app'),

	/**
	 * The point at which the application starts executing.
	 */
	entry: './src/index.js',

	/**
	 * Instruct webpack how and where it should output the bundles.
	 */
	output: {
		/**
		 * The name of the output bundle.
		 */
		filename: 'assets/bundle.js',

		/**
		 * The path that will contain the bundles.
		 */
		path: path.resolve(__dirname, 'public')
	},

	/**
	 * Instruct webpack how to treat different types of modules.
	 */
	module: {
		/**
		 * Define the rules used to manipulate the modules.
		 */
		rules: [
			/**
			 * Enable ES201* syntax in JavaScript files.
			 */
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					}
				],
			},
		],
	},

	/**
	 * Setup the server used for development.
	 */
	devServer: {
		/**
		 * Make CLI output of webpack less verbose.
		 */
		noInfo: true
	},

	/**
	 * Customize the build process.
	 */
	plugins: [
		/**
		 * Output the main HTML file.
		 */
		new HtmlWebpackPlugin({
			title: 'Weatheros',
			template: 'index.html',
			inject: false,
			alwaysWriteToDisk: true
		}),

		new HtmlWebpackHardDiskPlugin()
	]
};
