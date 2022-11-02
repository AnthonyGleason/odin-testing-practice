const capitalize = require('./capitalize');

test('capitalizes the first letter of the word', () => {
    expect(capitalize("hello")).toBe("Hello");
});