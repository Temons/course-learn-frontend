import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from "@/shared/ui/Button";

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  items: [
    {
      content: 'First'
    },
    {
      content: 'Dva'
    },
    {
      content: '4ki2'
    }
  ]
};
