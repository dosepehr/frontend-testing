import { describe, expect, it } from 'vitest';
import { sum } from './sum';
import { v4 as id } from 'uuid';
class Person {
    constructor(name) {
        this.name = name;
        this.id = 'person-' + id();
    }
}

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

describe('objects', () => {
    it('should equal', () => {
        expect({ foo: 'bar' }).toEqual({ foo: 'bar' });
    });
    it('should not equal', () => {
        expect({ a: 1 }).not.toEqual({ a: 2 });
    });
    it('should ignore undefiend vars', () => {
        expect({ a: 1, b: undefined }).toEqual({ a: 1 });
    });
    it('should not ignore undefiend vars', () => {
        expect({ a: 1, b: undefined }).not.toStrictEqual({ a: 1 });
    });
    it('should ignore different instances', () => {
        expect(new Person('sepehr')).toEqual({
            id: expect.stringContaining('person-'),
            name: 'sepehr',
        });
    });
    it('should not ignore undefiend vars', () => {
        expect(new Person('sepehr')).not.toStrictEqual({
            name: 'sepehr',
            id: expect.stringContaining('person-'),
        });
    });
    it('should should equal a part of that object', () => {
        expect(new Person('sepehr')).toEqual(
            expect.objectContaining({
                name: 'sepehr',
            })
        );
    });
});

