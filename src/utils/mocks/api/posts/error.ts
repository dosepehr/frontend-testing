import { http, HttpResponse } from 'msw';
const url = 'http://localhost:5000/posts';

export const getErrorHandler = [
    http.get(url, () => {
        return HttpResponse.json(
            { message: 'Failed to fetch posts' },
            { status: 500 }
        );
    }),
];

export const createErrorHandler = [
    http.post(url, () => {
        return HttpResponse.json(
            { message: 'Failed to create post' },
            { status: 400 }
        );
    }),
];

export const updateErrorHandler = [
    http.put(`${url}/:id`, () => {
        return HttpResponse.json(
            { message: 'Failed to update post' },
            { status: 400 }
        );
    }),
];

export const deleteErrorHandler = [
    http.delete(`${url}/:id`, () => {
        return HttpResponse.json(
            { message: 'Failed to delete post' },
            { status: 400 }
        );
    }),
];

