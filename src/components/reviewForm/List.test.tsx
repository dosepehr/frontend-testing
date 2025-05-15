import { describe, expect, test } from 'vitest';
import { Review } from '../../App';
import { render, screen } from '@testing-library/react';
import List from './List';

const mockReviews: Review[] = [
    {
        email: 'test@example.com',
        rating: '4',
        text: 'Great product!',
    },
    {
        email: 'user@example.com',
        rating: '5',
        text: 'Excellent service',
    },
];

describe('Reviews List', () => {
    test('Should display "No Reviews" when array is empty', () => {
        render(<List reviews={[]} />);

        const noReviewsMessage = screen.getByText('No reviews yet');
        expect(noReviewsMessage).toBeInTheDocument();
    });
    test('Should display Reviews List', () => {
        render(<List reviews={mockReviews} />);

        mockReviews.forEach((review) => {
            expect(screen.getByText(review.text)).toBeInTheDocument();
            expect(screen.getByText(review.email)).toBeInTheDocument();

            const stars = '⭐'.repeat(+review.rating);
            expect(screen.getByText(stars)).toBeInTheDocument();
        });
    });
});

