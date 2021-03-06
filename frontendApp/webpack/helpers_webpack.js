const webpack = require("webpack");
const path = require("path");
const { PATHS, isDev, isProd } = require("./constants_webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminPngquant = require("imagemin-pngquant");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");

const getFilename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const getPlugins = () => {
  const plugins = [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(PATHS.static, "favicon.ico"),
          to: PATHS.dist,
        },
        {
          from: path.join(PATHS.static, "images"),
          to: path.join(PATHS.dist, "images"),
        }
      ],
    }),
    new ImageminPlugin({
          disable: isDev,
          test: /\.(jpe?g|png|gif|svg)$/i,
          optipng: {
              optimizationLevel: 7,
          },
          pngquant: {
              quality: [0.7, 0.9],
              speed: 4,
          },
          gifsicle: {
              optimizationLevel: 3,
          },
          svgo: {
              plugins: [{ removeTitle: true }, { convertPathData: false }],
          },
          jpegtran: {
              progressive: true,
          },
          plugins: [
              imageminMozjpeg({
                  quality: 90,
                  progressive: true,
              }),
          ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./static/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: getFilename("css"),
    }),
  ];

  return plugins;
};

const getJSLoaders = () => {
  const loaders = ["babel-loader"];
  if (isDev) {
    loaders.push({
      loader: "eslint-loader",
    });
  }
  return loaders;
};

const getCSSLoaders = (extraLoader) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: isDev, reloadAll: isDev },
    },
    "css-loader",
  ];
  if (isProd) {
    loaders.push({
      loader: "postcss-loader",
      options: {
        plugins: [autoprefixer()],
      },
    });
  }
  if (extraLoader) loaders.push(extraLoader);
  return loaders;
};

const getFontLoaders = () => {
  return [
    {
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    },
  ];
};

const getImageLoaders = (params) => {
  const loaders = [
    {
      loader: "file-loader",
      options: {
        name: isDev ? "[path][name].[ext]" : "[path][name].[contenthash].[ext]",
      },
    },
  ];
  if (params.compress) {
    loaders.push({
      loader: "img-loader",
      options: {
        plugins: [
          imageminGifsicle({
            interlaced: false,
          }),
          imageminMozjpeg({
            progressive: true,
            arithmetic: false,
            quality: 90,
          }),
          imageminPngquant({
            speed: 1,
            quality: [0.95, 1],
          }),
          imageminSvgo({
            plugins: [{ removeTitle: true }, { convertPathData: false }],
          }),
        ],
      },
    });
  }
  return loaders;
};

module.exports = {
  getPlugins,
  getJSLoaders,
  getCSSLoaders,
  getFontLoaders,
  getImageLoaders,
  getFilename,
};
