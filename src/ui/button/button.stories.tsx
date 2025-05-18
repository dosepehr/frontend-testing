import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'components/Button',
    parameters: {
        layout: 'center',
    },

    // tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
};
export const Main: Story = {
    args: {
        children: 'button',
        className: 'btn-error',
    },
};

export default meta