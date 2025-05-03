import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
    beforeEach(() => {
        render(<Counter />);
    });

    afterEach(() => {
        cleanup();
    });

    it('should render with initial count of 0', () => {
        const counter = screen.getByTestId('counter-count');
        expect(counter).toHaveTextContent('0');
    });

    it('should start with two buttons disabled', () => {
        const resetBtn = screen.getByTestId('reset-count');
        expect(resetBtn).toBeDisabled();
    });

    it('should make reset button clickable when the count is greater than 0', async () => {
        const resetBtn = screen.getByTestId('reset-count');
        const incBtn = screen.getByTestId('increase-count');

        await userEvent.click(incBtn);

        expect(resetBtn).not.toBeDisabled();
    });

    it('should make the button count 2 when inc button clicks two times', async () => {
        const incBtn = screen.getByTestId('increase-count');
        const counter = screen.getByTestId('counter-count');

        await userEvent.click(incBtn);
        await userEvent.click(incBtn);

        expect(counter).toHaveTextContent('2');
    });
});

