import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Sandbox from '.';
describe('Sandbox', () => {
    beforeEach(() => {
        render(<Sandbox />);
    });
    it('should render text after 500ms', async () => {
        const asyncMessage = await screen.findByText('Async message');
        expect(asyncMessage).toBeInTheDocument();
    });

    it('must not return error', async () => {
        const errorMessage = screen.queryByText('Error message');
        expect(errorMessage).not.toBeInTheDocument();
    });

    it('must render 3 items', () => {
    
        const items = screen.getAllByText('Item 1');
        expect(items).toHaveLength(3);
    });
});

