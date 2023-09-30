import add from './sum';
import 'jest-localstorage-mock';

describe('./src/sum.js', function() {
    test('add two numbers', function() {
        expect(add(1, 2)).toBe(3);
    });
});