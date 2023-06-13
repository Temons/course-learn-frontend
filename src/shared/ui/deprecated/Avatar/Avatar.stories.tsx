import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AvatarImg from './storybook.jpg';

import { Avatar } from '@/shared/ui/deprecated/Avatar/index';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 122,
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
};
