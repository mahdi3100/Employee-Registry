const webpack = require('webpack');
const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");//minify css

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');



//for ENV FILE
require("dotenv").config({path:path.join(__dirname, '..', '.env')})


var HtmlWebpackPluginConfigAuth = new HtmlWebpackPlugin({
  template: 'public/index.html',
  filename: 'auth.html',//if you change it dont fortget to change in view
  inject: true,
  chunks: ['auth']
});
var HtmlWebpackPluginConfigHome = new HtmlWebpackPlugin({
  template: 'public/index.html',
  filename: 'home.html',//if you change it dont fortget to change in view
  inject: true,
  chunks: ['home']
});
var HtmlWebpackPluginConfigProfile = new HtmlWebpackPlugin({
  template: 'public/index.html',
  filename: 'profile.html',//if you change it dont fortget to change in view
  inject: true,
  chunks: ['profile']
});


console.log("IAM IN COMMON WEBPACK")


module.exports = {
  // mode: 'development',


  stats: {//for errors
    errorDetails: true,
    children: true
  },

  entry: {
    home: { import: './src/Home.js', filename: "[name].js" },
    profile: { import: './src/Profile.js', filename: "[name].js" },
    auth: { import: './src/Auth.js', filename: "[name].js" }
  },
  output: {

  
    path: path.resolve(__dirname, "public/dist"),
    filename: '[name].js'
  },

  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,//test: /App\.(js|jsx)$/,//test :/App\.js/,
        //use:['babel-loader'],
        use: {
          loader: 'babel-loader',

          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { "runtime": "automatic" }]
            ],

            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [
          //MiniCssExtractPlugin.loader, // 3. Recrée les fichiers css à partir de leurs équivalents en Javascript.
          "style-loader", // 2. Converti les fichiers CSS en équivalents Javascript
          "css-loader" // 1. Transpile le SCSS en CSS
        ],
 
       // Exclude any type of CSS FILE exclude: [path.resolve(__dirname, "")],
      },
   
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
        
          },
        ],
      },
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new CssMinimizerPlugin(),//to minify css
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    HtmlWebpackPluginConfigAuth,
    HtmlWebpackPluginConfigProfile,
    HtmlWebpackPluginConfigHome,
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
     
    })
  ]
}