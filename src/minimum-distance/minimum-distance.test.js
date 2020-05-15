const minimumDistances = require('./minimum-distances');

test('Get minimum distances in [2, 5, 3, 7, 2, 3]', () => {
  expect(minimumDistances([2, 5, 3, 7, 2, 3])).toBe(3);
});
