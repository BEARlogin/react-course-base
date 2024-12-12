const path = require("path");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: {
    app: "./js/app.js",
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"]
                }
            }
        }
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
};
