import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';


import ProfilePage from "./ProfilePage";

import { Currency } from "@/entities/Currency";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) =>
  <ProfilePage {...Object.assign({}, args)} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator(
    {
      profile: {
        form: {
          username: 'Username',
          age: 42,
          city: "Lisbon",
          lastname: 'lastname',
          first: 'first',
          currency: Currency.EUR,
        }
      }
    }
  )
]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(
  {
    profile: {
      form: {
        username: 'Username',
        age: 43,
        city: "Lisbon",
        lastname: 'lastname',
        first: 'first',
        currency: Currency.EUR,
      }
    }
  }
)]


export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator(
  {
    profile: {
      readonly: true,
      form: {
        username: 'Username',
        age: 43,
        city: "Lisbon",
        lastname: 'lastname',
        first: 'first',
        currency: Currency.EUR,
      }
    }
  }
)]
