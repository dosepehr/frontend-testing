import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum tests', () => {
    it('should return 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    it('should convert strings to int', () => {
        expect(sum(2, '4')).toBe(6);
    });

    it('should throw an error', () => {
        expect(() => sum(2, 'sepehr')).toThrowError();
    });
});
