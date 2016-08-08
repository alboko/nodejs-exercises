// webpack.config.js

var config = {
    entry: './src',               // entry point
    output: {                     // output folder
        path: './dist',           // folder path
        filename: 'my-app.js'     // file name
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel']      // note that specifying 'babel' or 'babel-loader' is equivalent for Webpack
        }
      ]
    }
}

module.exports = config;