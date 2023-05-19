import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    buildFavicon: '',
    buildLocales: '',
    favicon: '',
    locales: '',
  };
  config!.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule: RuleSetRule) =>
    /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule,
  );

  config.module!.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });
  config.module!.rules.push(buildCssLoaders(true));

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.com'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
