import { beforeEach, describe, expect, it } from 'vitest';
import Form from '.';
import { render, screen } from '@testing-library/react';

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
});

