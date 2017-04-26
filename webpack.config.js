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
	context: path.resolve(__dirname, 'src'),

	/**
	 * The point at which the application starts executing.
	 */
	entry: './index.js',

	/**
	 * Instruct webpack how and where it should output the bundles.
	 */
	output: {
		/**
		 * The name of the output bundle.
		 */
		filename: 'bundle.js',

		/**
		 * The path that will contain the bundles.
		 */
		path: path.resolve(__dirname, 'build/assets'),
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
	 * Customize the build process.
	 */
	plugins: [
		/**
		 * Output the main HTML file.
		 */
		new HtmlWebpackPlugin({
			title: 'Weatheros',
			filename: 'index.html',
			alwaysWriteToDisk: true
		}),

		new HtmlWebpackHardDiskPlugin({
			outputPath: path.resolve(__dirname, 'build')
		})
	]
};