const { merge } = require('webpack-merge');

 const common = require('./webpack.common.js');


 module.exports = merge(common, {

   mode: 'development',

   devtool: 'inline-source-map',
   //webpack var have to accees from here to get this plugin plugins: [new common.webpack.HotModuleReplacementPlugin()],
   devServer: {
    //contentBase: path.resolve(__dirname, './dist'),
     //static: './dist',
     hot: true,
   },

 });