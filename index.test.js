const togettheme = require('.');

describe('togetprop', () => {
  const defaultValue = {
    foo: 'foo',
  };

  test('test', () => {
    expect(togettheme(defaultValue)`color`({theme: {color: 'orange'}})).toEqual('orange');
    expect(togettheme(defaultValue)`foo`({theme: {color: 'orange'}})).toEqual('foo');
  });

  test('throw', () => {
    expect(() => togettheme('aaa')).toThrow();
  });
});
