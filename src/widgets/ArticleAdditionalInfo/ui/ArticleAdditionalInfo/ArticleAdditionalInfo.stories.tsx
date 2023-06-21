import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

export default {
  title: 'shared/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = args => (
  <ArticleAdditionalInfo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
