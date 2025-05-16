import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/vitest';

expect.extend(matchers);
import { worker } from './src/utils/mocks/server';

afterEach(() => {
    cleanup();
});

beforeAll(() => {
    worker.listen();
});
afterAll(() => {
    worker.close();
});

afterEach(() => {
    worker.resetHandlers();
});

