import React from 'react';
import classNames from 'classnames';
import userIcon from '../../assets/user.svg';
import emailIcon from '../../assets/envelope.svg';
import homeIcon from '../../assets/home.svg';
import locIcon from '../../assets/marker.svg';
import phoneIcon from '../../assets/phone-call.svg';
import webIcon from '../../assets/globe.svg';

/* Add more icon here */
export enum IconsName {
	user = 'user',
	email = 'email',
	home = 'home',
	mark = 'mark',
	phone = 'phone',
	web = 'web',
}

export const Icons = {
	[IconsName.user]: userIcon,
	[IconsName.email]: emailIcon,
	[IconsName.home]: homeIcon,
	[IconsName.mark]: locIcon,
	[IconsName.phone]: phoneIcon,
	[IconsName.web]: webIcon,
};

export type IconSize = 'lg' | 'xs';

export type IconName = keyof typeof Icons;

export interface IconProps {
	name: IconName;
	className?: string;
	size?: IconSize;
}

export const IconSizeMap: { [key in IconSize]: string } = {
	lg: 'w-7 h-7',
	xs: 'w-4 h-4',
};

export const Icon = ({ name, size, className }: IconProps) => {
	const IconComponent = Icons[name];
	const iconSizeClass = size && IconSizeMap[size];

	return <img src={IconComponent} alt="icon" className={classNames(className, iconSizeClass)} />;
};
