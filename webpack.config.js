const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    path.join(__dirname, "app", "app.jsx")
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react", "stage-0"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      __dirname,
      "node_modules",
      "app/components/",
      "public/components/"
    ],
    alias: {
      Main: "app/components/Main",
      applicationStyles: "app/styles/app",
      Navigation: "app/components/Navigation",
      Countdown: "app/components/Countdown",
      Timer: "app/components/Timer",
      Clock: "app/components/Clock"
    },
    extensions: [".json", ".js", ".jsx", ".css", ".scss"]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    publicPath: path.join("/dist/")
  }
};
