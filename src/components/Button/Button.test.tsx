import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from "./Button";

describe('Button component', () => {
    it('should render button contents', () => {
        render(<Button>Hello World</Button>);
        const button = screen.getByText('Hello World');
        expect(button).toHaveTextContent('Hello World');
    });

    it('should handle onClick event', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Hello World</Button>);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
