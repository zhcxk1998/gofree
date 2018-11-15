const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const root = __dirname;


module.exports = merge(common, {
  entry: {
    main: path.resolve(root, 'src/index.js'),
    vendor: [
      'react',
      'react-router-dom',
      'react-dom',
      'react-autosuggest',
      'react-day-picker',
      'semantic-ui-react',
      'axios'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
	devtool: 'source-map',
	plugins: [
      new CleanWebpackPlugin(['dist']),
  		new UglifyJSPlugin({
   			sourceMap: true
  		}),
  		new webpack.DefinePlugin({
       	'process.env': {
         	'NODE_ENV': JSON.stringify('production')
       	}
     	}),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),
      new webpack.HashedModuleIdsPlugin()
	]
});