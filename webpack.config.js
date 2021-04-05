const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

module.exports = {
  mode: mode,
  target: target,

  entry: ["babel-polyfill", "./src/index.tsx"],

  output: {
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // localIdentName: "[name]__[local]___[hash:base64:5]",
                localIdentName: "[name]__[local]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },

  plugins: plugins,

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  },
};
