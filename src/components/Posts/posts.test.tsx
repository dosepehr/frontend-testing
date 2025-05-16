import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Posts from '.';
import userEvent from '@testing-library/user-event';
import { Post } from '../../utils/hooks/usePosts';
export const posts: Post[] = [
    {
        id: '1',
        title: 'First Post',
        likes: 5,
    },
    {
        id: '2',
        title: 'Second Post',
        likes: 10,
    },
];
export const getFormElements = () => {
    return {
        input: screen.getByRole('textbox', { name: /title/i }),
        submitBtn: screen.getByRole('button', { name: /add post/i }),
    };
};
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

    it('Should create a new post', async () => {
        const { input, submitBtn } = getFormElements();
        const user = userEvent.setup();
        await user.type(input, 'new Post');
        await user.click(submitBtn);
        const newPost = await screen.findByText(/new post/i);
        expect(newPost).toBeInTheDocument();
    });
    it('Should update a post', async () => {
        const user = userEvent.setup();
        const likeBtn = await screen.findByText(`👍 ${posts[0].likes}`);
        await user.click(likeBtn);
        expect(likeBtn).toBeInTheDocument();
        expect(likeBtn).toHaveTextContent(`👍 ${posts[0].likes + 1}`);
    });
    it('Should delete a post', async () => {
        const user = userEvent.setup();
        const initialPosts = await screen.findAllByRole('article');
        expect(initialPosts).toHaveLength(3);
        const lastBlog = initialPosts[2];
        const deleteBtn = within(lastBlog).getByRole('button', {
            name: /delete/i,
        });
        await user.click(deleteBtn);
        const postsAfterDelete = await screen.findAllByRole('article');
        expect(postsAfterDelete).toHaveLength(2);
    });
});