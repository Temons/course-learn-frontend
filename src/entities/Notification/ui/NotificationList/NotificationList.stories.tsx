import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationList } from './NotificationList';


import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Notification!',
          description: 'Leave your comment!'
        },
        {
          id: '2',
          title: 'Notification1!',
          description: 'Leave your comment please!'
        },
        {
          id: '3',
          title: 'Notification2!',
          description: 'Leave your comment!!!'
        }
      ]
    }
  ]
}
