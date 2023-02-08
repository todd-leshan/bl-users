import React from 'react';
import classNames, { Argument } from 'classnames';
import { BaseProps, ChildProps } from '../../types/props';

type ButtonColor = 'primary' | 'secondary' | 'custom';

export interface ButtonProps extends BaseProps, ChildProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	color: ButtonColor;
	disabled?: boolean;
}

const getButtonColor = (color: ButtonColor) => {
	switch (color) {
		case 'primary':
			return 'bg-primary text-white border-primary hover:bg-secondary hover:border-secondary';
		case 'secondary':
			return 'bg-secondary text-white border-secondary hover:bg-primary hover:border-primary';
	}
};

const getButtonStyle = (color: ButtonColor, ...additional: Argument[]): string => {
	return classNames('inline-block text-center px-6 py-2 rounded-lg', getButtonColor(color), ...additional);
};

export const Button = ({ onClick, children, color, className, disabled }: ButtonProps): JSX.Element => {
	return (
		<button type="button" onClick={onClick} disabled={disabled} className={getButtonStyle(color, className)}>
			{children}
		</button>
	);
};
