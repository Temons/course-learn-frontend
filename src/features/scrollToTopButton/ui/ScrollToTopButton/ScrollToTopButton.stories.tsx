import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ScrollToTopButton } from './ScrollToTopButton';

export default {
  title: 'shared/ScrollToTopButton',
  component: ScrollToTopButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = args => (
  <ScrollToTopButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
