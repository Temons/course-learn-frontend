import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextSize, TextTheme } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title lorem2',
  text: 'text lorem 3',
};

export const Error = Template.bind({});
Error.args = {
  title: 'title lorem2',
  text: 'text lorem 3',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title lorem11111',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'title lor222',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'title lorem2',
  text: 'text lorem 3',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'title lorem11111',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'title lor222',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'title lorem2',
  text: 'text lorem 3',
  size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'title lorem2',
  text: 'text lorem 3',
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'title lorem2',
  text: 'text lorem 3',
  size: TextSize.L,
};
