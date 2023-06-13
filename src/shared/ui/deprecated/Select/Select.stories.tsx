import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Select } from '@/shared/ui/deprecated/Select/index';
export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'some label',
  options: [
    { value: '1234', content: 'content' },
    { value: '123412', content: 'content2' },
    { value: '123234', content: 'content3' },
    { value: '123434', content: 'content5' },
  ],
};
