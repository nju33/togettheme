const togetprop = require('togetprop');

module.exports = (defaultValues = {}) => {
  if (typeof defaultValues !== 'object') {
    throw new Error('Please you hove to set object at first argument');
  }

  return togetprop('theme', defaultValues);
}
