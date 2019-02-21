const Stack = require('../src/Stack');
let stack = new Stack();

test('New Stack is Empty', () => {
    expect(stack.list()).toEqual(expect.arrayContaining([]));
});

test('To have [1] after pushing 1', () => {
    stack.push(1);
    expect(stack.list()).toEqual(expect.arrayContaining([1]));
});


test('To have [2,1] after pushing 2', () => {
    stack.push(2);
    expect(stack.list()).toEqual(expect.arrayContaining([2,1]));
});

test('To pop 2', () => {
    expect(stack.pop()).toEqual(2);
});

test('Stack is Empty after clear', () => {
    stack.clear();
    expect(stack.list()).toEqual(expect.arrayContaining([]));
});

test('Stack pops undefined if empty', () => {
    expect(stack.pop()).toBeUndefined();
});