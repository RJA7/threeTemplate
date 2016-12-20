const path = require('path');

module.exports = {
    entry: "./app/js/main.js",

    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
      loaders: [
        {
          test: path.join(__dirname, 'app', 'js'),
          loader: 'babel-loader'
        }
      ]
    }
};
