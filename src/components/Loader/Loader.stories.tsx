import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Loader } from './Loader';

const metadata: Meta = {
    component: Loader,
    title: 'Components/Loader',
};

export default metadata;

const Template: Story = () => (<Loader />);

export const Component = Template.bind({});
