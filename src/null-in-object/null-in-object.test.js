const nullInObject = require('./null-in-object');

test('Replace empty string in object with null one property', () => {
  expect(nullInObject({ a: 'a', b: 'b', c: '' })).toEqual({
    a: 'a',
    b: 'b',
    c: null
  });
});

test('Replace empty string in object with null two properties', () => {
  expect(nullInObject({ a: '', b: 'b', c: '', d: 'd' })).toEqual({
    a: null,
    b: 'b',
    c: null,
    d: 'd'
  });
});

test('Replace empty string in object with null three properties', () => {
  expect(nullInObject({ a: '', b: '', c: '', d: 'd' })).toEqual({
    a: null,
    b: null,
    c: null,
    d: 'd'
  });
});
