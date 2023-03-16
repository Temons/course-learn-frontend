import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: 'shared/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;
const comment = {
  id: "46",
  text: "lorem text",
  user: {
    id: '42',
    username: 'username string',
    avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
  }
}
export const Normal = Template.bind({});
Normal.args = {
  comment
};

export const LoadingNormal = Template.bind({});
LoadingNormal.args = {
  isLoading: true
};

export const Dark = Template.bind({});
Dark.args = {
  comment
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  comment
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LoadingOrange = Template.bind({});
LoadingOrange.args = {
  isLoading: true
};
LoadingOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
