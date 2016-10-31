// All this stuff has taken here 
// https://medium.com/@srinisoundar/setting-up-environment-for-react-sass-es2015-babel-with-webpack-2f77445129#.oturd54tj
// With huge improvements taken here:
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.h8p9jw2ml

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const UglyJS = require('uglify-js-plugin');
const webpack = require('webpack');

// Doesn't work
// const path = require('path');
// const APP_DIR = path.resolve(__dirname, 'dev');
// const BUILD_DIR = path.resolve(__dirname, 'dist');


//const config 
const config = {
  // Option One--------------------A
    // entry: './dev/index.js',
    // output: {
     // path: __dirname + './dist',
    //   filename: './dist/bundle.js'
    // },
    //------------------------------A


  // Option Two ---------------------B
  // Read this http://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
     entry: __dirname + '/dev/index.js',
     //entry: APP_DIR + 'index.js',
    output: {
      path: __dirname +  '/dist',
     // path: BUILD_DIR,
      filename: 'bundle.js'
    },
  //---------------------------------B
  
    // Disable devtool to see compilated .css source
    // Prod version disable devtool
    //devtool: 'source-map',
    //----------------------------------------------

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
     // Could be moved to .babelrc file, without query---C           
                query: {
                    presets: ['react', 'es2015']
            }
     // The end to .babelrc------------------------------C       
          },
     // Case of working with pure .css--D     
          // {
          //   test: /\.css$/,
          //   loader: 'style!css'
          // },
     // .css case ----------------------D     
          {
            test: /\.scss$/,
            // loader: 'style!css!sass', 
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
          }
         ]
    },
        plugins: [
                           // The same path automatically to be linked in <head> 
     new ExtractTextPlugin('dist/styles/styles.css', {allChunks: true}),
     new HTMLwebpackPlugin({
      template: './dev/index.template.html',
      inject: true
    }),
      new UglyJS({
      compress: true,
      debug: true
     }),
      // Custom plugin taken here  http://moduscreate.com/optimizing-react-es6-webpack-production-build/
       new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
    ],

    // The resolve property is where you have to add all the file types you are using in your application
    // So, we can require('someModule') without extention
    resolve: {
      extensions: ['','.js','.jsx','.css', '.scss']
    }
};

module.exports = validate(config);