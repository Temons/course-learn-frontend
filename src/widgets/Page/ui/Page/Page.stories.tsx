import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Page } from './Page';

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})]
