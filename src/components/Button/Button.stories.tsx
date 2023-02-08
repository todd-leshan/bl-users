import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from "./Button";

const metadata: Meta = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        label: {
            type: 'string',
        },
    },
};

export default metadata;

const Template: Story<ButtonProps & { label: string }> = (args) => (
    <Button {...args}>{args.label || 'Click me'}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    onClick: () => {},
};
