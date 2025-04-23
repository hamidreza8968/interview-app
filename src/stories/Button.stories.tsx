import Button from '../components/Button/Button.tsx';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../styles/theme.ts';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        children: { control: 'text' },
        color: { control: 'color' },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            control: 'radio',
            options: ['solid', 'outline', 'ghost'],
        },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        onClick: { action: 'clicked' },
        href: { control: 'text' },
        className: { control: false },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
    args: {
        children: 'Click me!',
        color: Theme.primary,
        size: 'medium',
        variant: 'solid',
        disabled: false,
        fullWidth: false,
    },
};


export const Red: Story = {
    args: {
        color: Theme.red,
        children: 'Red Button',
    },
};

export const Green: Story = {
    args: {
        color: '#00AA00',
        children: 'Green Button',
    },
};
