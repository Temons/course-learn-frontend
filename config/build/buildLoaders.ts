import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildCssLoaders } from "./loaders/buildCssLoaders";

export function buildLoaders({ isDev }:  BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = buildCssLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      },

    }
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}