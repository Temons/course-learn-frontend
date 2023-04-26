import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})]
