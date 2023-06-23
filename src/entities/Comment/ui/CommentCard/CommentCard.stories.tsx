import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentCard } from './CommentCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = args => (
  <CommentCard {...args} />
);
const comment = {
  id: '46',
  text: 'lorem text',
  user: {
    id: '42',
    username: 'username string',
    avatar:
      'https://eimg.pravda.com/images/doc/9/9/991c35e-white-hackers-690.jpg',
  },
};
export const Normal = Template.bind({});
Normal.args = {
  comment,
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
  comment,
};
NormalRedesigned.decorators = [NewDesignDecorator];

export const LoadingNormal = Template.bind({});
LoadingNormal.args = {
  comment,
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
  comment,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  comment,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LoadingOrange = Template.bind({});
LoadingOrange.args = {
  isLoading: true,
};
LoadingOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
