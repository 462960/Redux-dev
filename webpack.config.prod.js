// All this stuff has taken here 
// https://medium.com/@srinisoundar/setting-up-environment-for-react-sass-es2015-babel-with-webpack-2f77445129#.oturd54tj
// With huge improvements taken here:
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.h8p9jw2ml

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
const HTMLwebpackPlugin = require('html-webpack-plugin');


//const config 
const config = {
  // Option One--------------------A
    entry: './dev/index.js',
    output: {
     // path: __dirname + './dist',
      filename: './dist/bundle.js'
    },
    //------------------------------A


  // Option Two doesn't work---------B
  // Seems __dirname means localhost
    //  entry: __dirname + '/dev/main.js',
    // output: {
    //   path: __dirname +  '/dist',
    //   filename: 'bundle.js'
    // },
  //---------------------------------B
  
    // Disable devtool to see compilated .css source
    devtool: 'source-map',
    //----------------------------------------------

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
     // Could be moved to .babelrc file, without query           
                query: {
                    presets: ['react', 'es2015']
            }
     // The end to .babelrc----------------------------       
          },
     // Case of working with pure .css     
          // {
          //   test: /\.css$/,
          //   loader: 'style!css'
          // },


     // .css case --------------------     
          {
            test: /\.scss$/,
            // loader: 'style!css!sass', 
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
          }
         ]
    },
        plugins: [
                           // The same path should be linked in <head> 
     new ExtractTextPlugin('dist/styles/styles.css', {allChunks: true}),
     new HTMLwebpackPlugin({
      template: './dev/index.template.html',
      inject: true
      //title: 'Webpack demo'
    })
    ],

    // The resolve property is where you have to add all the file types you are using in your application
    // So, we can require('someModule') without extention
    resolve: {
      extensions: ['','.js','.jsx','.css', '.scss']
    }
};

module.exports = validate(config);