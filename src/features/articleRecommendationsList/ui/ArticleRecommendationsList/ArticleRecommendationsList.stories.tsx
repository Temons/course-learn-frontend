import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import withMock from "storybook-addon-mock";
import { Article } from "entities/Article";

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article:Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 145,
  user: {
    id: '1', username: '123'
  },
  blocks: [],
  type: [],
  title: '12445',
  subtitle: 'kwjefbwef'
}

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ]
    }
  ]
}
