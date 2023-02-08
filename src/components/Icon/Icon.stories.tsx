import { Meta, Story } from '@storybook/react';

import { Icon, IconName, Icons, IconSizeMap, IconSize } from './Icon';

const metadata: Meta = {
    component: Icon,
    title: 'Components/Icons',
    argTypes: {},
};
export default metadata;

const icons = Object.keys(Icons) as IconName[];
const sizes = Object.keys(IconSizeMap) as IconSize[];

const Template: Story = () => {
    return (
        <div>
            {icons.map((name) => (
                <div className="mb-6" key={name}>
                    <div className="mb-3"> {`Icon ${name}`}</div>
                    <div className="flex items-center">
                        {sizes.map((size) => (
                            <span key={size} className="mr-8 w-10">
								<div style={{ width: IconSizeMap.lg, height: IconSizeMap.lg }} className="flex items-center justify-center">
									<Icon name={name} size={size} />
								</div>
								<div className="text-center">{`${size}`}</div>
							</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const Icons_ = Template.bind({});
Icons_.args = {};
