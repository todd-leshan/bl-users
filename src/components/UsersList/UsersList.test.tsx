import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UsersList } from "./UsersList";
import {mockUsers} from "../../mocks/users";

describe('Users List component', () => {
    const users = mockUsers();
    const refetch = jest.fn();

    beforeEach(() => {
        render(<UsersList users={users} refetchUsers={refetch} />);
    });

    it('should render all elements as expected', () => {
        const userCount = screen.getByText(`Current users: ${users.length}`);
        const reloadBtn = screen.getByText('Reload all users');
        const clearBtn = screen.getByText('Clear all users');
        expect(userCount).toBeInTheDocument();
        expect(reloadBtn).toBeInTheDocument();
        expect(clearBtn).toBeInTheDocument();

        const removeBtns = screen.getAllByText('remove');
        expect(removeBtns).toHaveLength(users.length);
    });

    it('should invoke remove as expected', async () => {
        const removeBtns = screen.getAllByText('remove');
        const user = userEvent.setup();
        await user.click(removeBtns[0]);

        const removeBtnsAfterRemoval = screen.getAllByText('remove');
        expect(removeBtnsAfterRemoval).toHaveLength(users.length - 1);

        const userCount = screen.getByText(`Current users: ${users.length - 1}`);
        expect(userCount).toBeInTheDocument();
    });

    it('should remove all users', async () => {
        const clearBtn = screen.getByText('Clear all users');
        const user = userEvent.setup();
        await user.click(clearBtn);

        const userCount = screen.getByText('Current users: 0');
        expect(userCount).toBeInTheDocument();
    });

    it('should show error message when reloading with users in view', async () => {
        const reloadBtn = screen.getByText('Reload all users');
        const user = userEvent.setup();
        await user.click(reloadBtn);

        const errorMsg = screen.getByText('You need to clear all users first.');
        expect(errorMsg).toBeInTheDocument();
    });

    it('should invoke refetch when no users in view and reload is clicked', async () => {
        const clearBtn = screen.getByText('Clear all users');
        const user = userEvent.setup();
        await user.click(clearBtn);

        const reloadBtn = screen.getByText('Reload all users');
        await user.click(reloadBtn);

        expect(refetch).toBeCalled();
    });
});
