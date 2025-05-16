import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Posts from '.';

describe('Posts', () => {
    beforeEach(() => {
        render(<Posts />);
    });
    it('Should render posts', () => {
        // screen.debug();
        const title = screen.getByText(/posts manager/i);
        expect(title).toBeInTheDocument();
    });
    it('Should fetch posts on mount', async () => {
        expect(await screen.findByText(/first post/i)).toBeInTheDocument();
        expect(await screen.findByText(/second post/i)).toBeInTheDocument();
    });
});

