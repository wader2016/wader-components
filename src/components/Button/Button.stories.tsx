import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './button';

export default {
  title: 'Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button'
}

export const Danger = Template.bind({});
Danger.args = {
  btnType: 'danger',
  size: 'sm',
  children: 'Small Danger Button'
}

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
