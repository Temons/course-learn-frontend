import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import LoginForm from "./LoginForm";

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: "admin", password: '123' }
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  StoreDecorator({ loginForm: { username: "admin", password: '123' } }),
  ThemeDecorator(Theme.DARK)
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  loginForm: { username: "admin111", password: '122222', error: 'Some error text' }
})];

export const withErrorDark = Template.bind({});
withErrorDark.args = {};
withErrorDark.decorators = [
  StoreDecorator({ loginForm: { username: "error", password: 'error', error: 'Some error text' } }),
  ThemeDecorator(Theme.DARK)
];

export const loading = Template.bind({});
loading.args = {};
loading.decorators = [
  StoreDecorator({ loginForm: { isLoading: true } })
];

export const loadingDark = Template.bind({});
loadingDark.args = {};
loadingDark.decorators = [
  StoreDecorator({ loginForm: { isLoading: true } }),
  ThemeDecorator(Theme.DARK)
];
