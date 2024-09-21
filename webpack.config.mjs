import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (env) => ({
  mode: env.mode,
  entry: path.join(path.resolve(), "src", "index.js"),
  output: {
    clean: true,
    filename: "bundle.js",
    path: path.resolve(path.resolve(), "dist"),
  },
  devtool: env.mode === "development" ? "source-map" : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(), "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    static: "./public",
    hot: true,
    compress: true,
  },
  resolve: {
    alias: {
      Assets: path.resolve(path.resolve(), "src", "assets"),
    },
  },
});
