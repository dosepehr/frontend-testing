export function sum(a, b) {
    if (!Number(a) || !Number(b)) {
        throw new Error('no valid data');
    }
    return a + b;
}