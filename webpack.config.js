const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
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
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|gif)$/i,
        use: ["url-loader?limit=100000"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
};
