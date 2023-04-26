import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: "hello world",
      user: { id: '1', username: 'Oleg' }
    },
    {
      id: '2',
      text: "hello @orld!!!",
      user: { id: '2', username: 'Petya' }
    }
  ]
};

export const isLoading = Template.bind({});
isLoading.args = {
  comments: [],
  isLoading: true
};
