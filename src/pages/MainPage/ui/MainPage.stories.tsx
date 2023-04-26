import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';


import MainPage from "./MainPage";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) =>
  <MainPage {...Object.assign({}, args)} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
