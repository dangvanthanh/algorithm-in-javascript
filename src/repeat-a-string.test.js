const repeatString = require('./repeat-a-string');

test('Repeat string 3 times', () => {
  expect(repeatString('*', 3)).toBe('***');
});
