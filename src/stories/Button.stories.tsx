import * as React from 'react';
import Button from '../components/Button/Button.tsx';
import { ButtonComponentProps } from '../components/Button/Button.types';

type Story = {
    (args: ButtonComponentProps): React.ReactElement;
    args?: Partial<ButtonComponentProps>;
};

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'handleClick' },
    },
};

const Template = (args: ButtonComponentProps): React.ReactElement => <Button {...args} />;

export const Red: Story = Template.bind({});
Red.args = {
    color: 'red',
    children: 'Add',
};

export const Green: Story = Template.bind({});
Green.args = {
    color: 'green',
    children: 'Add',
};

export const Small: Story = Template.bind({});
Small.args = {
    children: 'Add',
    size: 'small',
};

export const Large: Story = Template.bind({});
Large.args = {
    children: 'Add',
    size: 'large',
};

export const FullWidth: Story = Template.bind({});
FullWidth.args = {
    children: 'Add',
    fullWidth: true,
};
