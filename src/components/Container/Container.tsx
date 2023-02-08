import classNames from 'classnames';
import {BaseProps, ChildProps} from "../../types/props";

export interface ContainerProps extends BaseProps, ChildProps {}

export const Container = ({ children, className }: ContainerProps ) => {
    return <div className={classNames('container mx-auto px-4', className)}>{children}</div>;
};
