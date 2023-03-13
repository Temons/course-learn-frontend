import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from "./ProfileCard";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'Username',
    age: 42,
    city: "Lisbon",
    lastname: 'lastname',
    first: 'first',
    currency: Currency.EUR,
    country: Country.Portugal,
    avatar: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'some error'
}

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
}