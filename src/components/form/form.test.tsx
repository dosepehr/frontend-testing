import { beforeEach, describe, expect, it } from 'vitest';
import Form from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

describe('Form', () => {
    beforeEach(() => {
        render(<Form />);
    });

    it('Should render inputs as empty', () => {
        const emailInputElement = screen.getByRole('textbox', {
            name: /email/i,
        });
        expect(emailInputElement).toHaveValue('');
        const passwordInputElement = screen.getByTestId('password-input');
        expect(passwordInputElement).toHaveValue('');
    });
    it('Should be able to type', async () => {
        const user = userEvent.setup();
        const emailInputElement = screen.getByTestId('email-input');
        await user.type(emailInputElement, 'test@gmail.com');
        expect(emailInputElement).toHaveValue('test@gmail.com');
    });
    it('Should return error on email validation', async () => {
        const user = userEvent.setup();
        const emailInputElement = screen.getByTestId('email-input');
        await user.type(emailInputElement, 'testgmail.com');
        const emailErrorMessage = screen.getByText('Invalid email');

        expect(emailErrorMessage).toBeInTheDocument();
    });
});

