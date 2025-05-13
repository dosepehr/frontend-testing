import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Sandbox from '.';
describe('Sandbox', () => {
    beforeEach(() => {
        render(<Sandbox />);
    });
    afterEach(() => {
        cleanup();
    });

    it('should render text after 500ms', async () => {
        const asyncMessage = await screen.findByText('Async message');
        expect(asyncMessage).toBeInTheDocument();
    });
});

