var webpack = require('webpack'),
	CleanPlugin = require('clean-webpack-plugin'),
	HtmlPlugin = require('html-webpack-plugin'),
	ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['bootstrap-loader', './app/app.js'],
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
			    test: /\.js?$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'babel'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.html$/,
				loader: 'ngtemplate!html'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader',
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
		            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
		        ]
		    }
       	]
 },

 devServer: {
    port: 3000
  },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanPlugin(['dist']),
		new HtmlPlugin({
			title: 'Smirnoff Yo!',
			template: './app/index.ejs'
		}),
		new ngAnnotatePlugin({
            add: true
        }),
		new ExtractTextPlugin("app.css")
   ]
};
