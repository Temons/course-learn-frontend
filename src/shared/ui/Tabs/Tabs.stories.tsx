import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from "@storybook/addon-actions";

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: 'value 1',
      content: 'content 1'
    },
    {
      value: 'value 2',
      content: 'content 2'
    },
    {
      value: 'value 3',
      content: 'content 3'
    },
  ],
  value: 'value 2',
  onTabClick: action('onTabClick')
};
