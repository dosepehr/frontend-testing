// Import necessary utilities from MSW and our Post type
import { http, HttpResponse } from 'msw';
import { Post } from '../hooks/usePosts';

// Define the API endpoint we want to mock
const url = 'http://localhost:4000/posts';

// Create mock data that will be used as our "database"
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

// Define request handlers for MSW
export const handlers = [
    // Mock the GET /posts endpoint
    // When a request is made to this URL, return our mock posts data
    http.get(url, async () => {
        return HttpResponse.json(posts);
    }),
];

