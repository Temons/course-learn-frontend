import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  direction: 'column',
  gap: '8',
  children: (
    <>
      <p>123</p>
      <p>321</p>
      <p>342</p>
      <p>543</p>
      <p>246</p>
    </>
  ),
};
