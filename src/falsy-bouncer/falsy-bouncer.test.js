const falsyBouncer = require('./falsy-bouncer');

test('Filter out all the falsy values in array', () => {
  expect(falsyBouncer([2, 'english', null, false, '', 11])).toStrictEqual([
    2,
    'english',
    11
  ]);
});
