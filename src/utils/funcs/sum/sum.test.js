import { describe, expect, test } from 'vitest';
import { sum } from './sum.js';

describe('sum fn tests', () => {
    test('adds 1 + 2 to equal 3 ✅', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('throw error on passing string ✅', () => {
        expect(() => sum(1, 'sepehr')).toThrowError('no valid data');
    });
});

