import React from 'react';
import { Meta, Story } from '@storybook/react';

import { UsersList, UsersListProps } from "./UsersList";
import {mockUsers} from "../../mocks/users";

const metadata: Meta = {
    component: UsersList,
    title: 'Components/UsersList',
};

export default metadata;

const Template: Story<UsersListProps> = (args) => (<UsersList users={args.users} refetchUsers={args.refetchUsers} />);

export const Component = Template.bind({});
Component.args = {
    users: mockUsers(),
    refetchUsers: () => {},
};
