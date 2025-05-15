import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

export const getFormElements = () => {
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const ratingSelect = screen.getByRole('combobox', { name: /rating/i });
    const textArea = screen.getByRole('textbox', { name: /your review/i });
    const submitButton = screen.getByRole('button', { name: /submit review/i });

    return {
        emailInput,
        ratingSelect,
        textArea,
        submitButton,
    };
};

describe('ReviewForm', () => {
    const mockOnSubmit = vi.fn();

    // Before each test runs:
    beforeEach(() => {
        // Clear all information about how the mock was called
        // This ensures each test starts with a fresh mock function
        // without any previous calls recorded
        mockOnSubmit.mockClear();
    });
    it('Should render form elements correctly', () => {
        render(<Form onSubmit={mockOnSubmit} />);

        const { emailInput, ratingSelect, textArea, submitButton } =
            getFormElements();
        expect(emailInput).toHaveValue('');
        expect(ratingSelect).toHaveValue('');
        expect(textArea).toHaveValue('');
        expect(submitButton).toBeInTheDocument();
    });

    it('Should show error when review is short', async () => {
        const user = userEvent.setup();
        render(<Form onSubmit={mockOnSubmit} />);
        const { emailInput, ratingSelect, textArea, submitButton } =
            getFormElements();

        await user.type(emailInput, 'test@example.com');
        await user.selectOptions(ratingSelect, '5');
        await user.type(textArea, 'Short');
        await user.click(submitButton);

        expect(
            screen.getByText(/review must be at least 10 characters long/i)
        ).toBeInTheDocument();
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});

