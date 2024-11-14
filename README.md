## Project Launch

```
npm install - install dependencies
npm run start:dev OR npm run start:dev:vite - launch server + frontend project in dev mode
```

----

## Скрипты

- `npm run start` - Launch the frontend project with webpack dev server
- `npm run start:vite` - Launch the frontend project with Vite
- `npm run start:dev` - Launch the frontend project with webpack dev server + backend
- `npm run start:dev:vite` - Launch the frontend project with Vite + backend
- `npm run start:dev:server` - Launch the backend server
- `npm run build:prod` - Build the project in production mode
- `npm run build:dev` - Build the project in dev mode (not minified)
- `npm run lint:ts` - Lint TypeScript files
- `npm run lint:ts:fix` - Fix lint issues in TypeScript files
- `npm run lint:scss` - Lint SCSS files
- `npm run lint:scss:fix` - Fix lint issues in SCSS files
- `npm run test:unit` - Run unit tests with Jest
- `npm run test:ui` - Run screenshot tests with Loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generate a JSON report for screenshot tests
- `npm run test:ui:html` - Generate an HTML report for screenshot tests
- `npm run storybook` - Launch Storybook
- `npm run storybook:build` - Build Storybook
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project Architecture

The project is developed using the Feature-Sliced Design methodology.

Documentation link: [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Localization Workflow

The project uses the i18next library for managing translations.
Translation files are located in the public/locales directory.

For a more efficient workflow, it is recommended to install the appropriate plugin for WebStorm or VSCode.

Documentation for i18next can be found here: [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

The project includes 4 types of tests:
1) Standard unit tests with Jest - `npm run test:unit`
2) Component tests using React Testing Library -`npm run test:unit`
3) Screenshot testing with Loki - `npm run test:ui`
4) E2E testing with Cypress - `npm run test:e2e`

More details about tests can be found here: [документация тестирование](/docs/tests.md)

----

## Linting

The project uses eslint for checking TypeScript code and stylelint for checking style files.

For strict control of key architectural principles, a custom eslint plugin, eslint-plugin-arttraf-eslint-fsd-plugin, is used. It contains 3 rules:
1) path-checker - prevents the use of absolute imports within a single module.
2) layer-imports - checks the correctness of layer usage from the FSD perspective (e.g., widgets cannot be used in features and entities).
3) public-api-imports - allows imports from other modules only through their public API. It has auto-fix functionality.

##### Running Linters
- `npm run lint:ts` - Linting TypeScript files.
- `npm run lint:ts:fix` - Fixing TypeScript files with the linter.
- `npm run lint:scss` - Linting SCSS files with the style linter.
- `npm run lint:scss:fix` - Fixing SCSS files with the style linter.

----
## Storybook

In the project, story cases are described for each component.
Server requests are mocked usingstorybook-addon-mock.

The file with story cases is created next to the component with the .stories.tsx extension.

Storybook can be started with the following command:
- `npm run storybook`

More details about  [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project Configuration

For development, the project contains 2 configurations:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both bundlers are adapted to the main features of the application.

All configuration files are stored in /config
- /config/babel - Babel
- /config/build - Webpack configuration
- /config/jest - Testing environment configuration
- /config/storybook - Storybook configuration

The scripts folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

----

## CI pipeline and pre commit hooks

The GitHub Actions configuration is located in /.github/workflows.
In the CI pipeline all types of tests, project and Storybook builds, and linting are run.

In pre-commit hooks, the project is checked with linters. The configuration is in /.husky

----

### Data Handling

Data interaction is handled using Redux Toolkit.
Reusable entities should be normalized using EntityAdapter whenever possible.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronously loading reducers (to avoid bundling them into the main bundle),
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

----

### Feature Flags Management

The use of feature flags is allowed only through the helper toggleFeatures.

It takes an object with the following options:

{
  name: name of the feature flag,
  on: function that will run after enabling the feature,
  off: function that will run after disabling the feature
}

To automatically remove a feature use the script remove-feature.ts, which accepts 2 arguments:
1. The name of the feature flag to remove.
2. The state (on\off)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [ArticleSortSelector](src/features/ArticleSortSelector)
- [ArticleTypeTabs](src/features/ArticleTypeTabs)
- [ArticleViewSelector](src/features/ArticleViewSelector)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [scrollToTopButton](src/features/scrollToTopButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
- [uiDesignSwitcher](src/features/uiDesignSwitcher)
