import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/vitest';

expect.extend(matchers);
import server from './src/utils/mocks/server';

afterEach(() => {
    cleanup();
});

beforeAll(() => {
    server.listen();
});
afterAll(() => {
    server.close();
});

afterEach(() => {
    server.resetHandlers();
});

