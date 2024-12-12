const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./js/app.js",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
};
