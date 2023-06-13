import webpack from 'webpack';

import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const cssLoader = buildCssLoaders(isDev);

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  const svgLoader = {
    test: /\.svg$/i,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true
              }
            }
          ]
        }
      }
    }],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxBabelLoader,
    // typescriptLoader,
    cssLoader
  ]
}
