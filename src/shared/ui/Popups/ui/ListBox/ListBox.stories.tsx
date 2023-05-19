import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    Story => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = args => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: 'Normal',
  items: [
    { content: '1fgwegw 2w;oifnw;gjnewr', value: '12ewf' },
    { content: '412w;oifnwsdv;gjnewr', value: '12sdvewf' },
    { content: 'wef12w;oifnw;gjnewr', value: '5152esdvwf' },
    { content: '5512w;oifnw;gjnewr', value: '13r2swewf' },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  value: 'TopLeft',
  direction: 'top left',
  items: [
    { content: '1fgwegw 2w;oifnw;gjnewr', value: '12ewf' },
    { content: '412w;oifnwsdv;gjnewr', value: '12sdvewf' },
    { content: 'wef12w;oifnw;gjnewr', value: '5152esdvwf' },
    { content: '5512w;oifnw;gjnewr', value: '13r2swewf' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  value: 'TopRight',
  direction: 'top right',
  items: [
    { content: '1fgwegw 2w;oifnw;gjnewr', value: '12ewf' },
    { content: '412w;oifnwsdv;gjnewr', value: '12sdvewf' },
    { content: 'wef12w;oifnw;gjnewr', value: '5152esdvwf' },
    { content: '5512w;oifnw;gjnewr', value: '13r2swewf' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  value: 'BottomLeft',
  direction: 'bottom left',
  items: [
    { content: '1fgwegw 2w;oifnw;gjnewr', value: '12ewf' },
    { content: '412w;oifnwsdv;gjnewr', value: '12sdvewf' },
    { content: 'wef12w;oifnw;gjnewr', value: '5152esdvwf' },
    { content: '5512w;oifnw;gjnewr', value: '13r2swewf' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  value: 'BottomRight',
  direction: 'bottom right',
  items: [
    { content: '1fgwegw 2w;oifnw;gjnewr', value: '12ewf' },
    { content: '412w;oifnwsdv;gjnewr', value: '12sdvewf' },
    { content: 'wef12w;oifnw;gjnewr', value: '5152esdvwf' },
    { content: '5512w;oifnw;gjnewr', value: '13r2swewf' },
  ],
};
