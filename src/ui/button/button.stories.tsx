import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'components/Button',
    parameters: {
        layout: 'center',
    },
    argTypes: {
        children: {
            name: 'Label',
            control: 'text',
            description: 'Text to display on the button',
        },
        className: {
            name: 'styles',
            control: 'text',
            description: 'Button styles',
        },
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
export const Primary: Story = {
    render: () => <Button className='btn-primary' >Primary</Button>,
};

export default meta;

