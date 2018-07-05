const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // define an entry point
  entry: "./src/index.tsx",

  // define output point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: 'maps/[file].map'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.css', '.js', '.json', '.ts', '.tsx'],
  },
  target: "web",
  mode: "development",
  module: {
    // loaders has been moved to rules in new webpack version
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        'use': [ 'style-loader',
          {
            'loader': 'typings-for-css-modules-loader',
            'options': {
              camelCase: true,
              modules: true,
              namedExport: true
            }
          }
          ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'url-loader?limit=1000'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
        filename: "./index.html"
    })
  ]
};
