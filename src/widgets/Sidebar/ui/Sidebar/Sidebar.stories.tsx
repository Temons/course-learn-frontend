import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  user: {
    authData: {}
  }
})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {}
  }
})];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: undefined
  }
})]
