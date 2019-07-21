const path = require('path');
	
module.exports = {
  mode: 'production',
	entry: {
    sample03: "./src/sample03.js",
    sample04: "./src/sample04.js"
  },
	output: {
    path:path.resolve(__dirname, "sample"),
    filename: '[name].js',
	},
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ]
  }
};