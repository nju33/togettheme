# togettheme

[![CircleCI](https://circleci.com/gh/nju33/togettheme.svg?style=svg)](https://circleci.com/gh/nju33/togettheme)

## Install

```bash
yarn add togettheme
```

## Example

```javascript
const togettheme = require('togettheme');

const defaultValues = {
  color: 'orange',
  background: '#444'
};

const theme = togettheme(defaultValues);

const data = {
  theme: {
    color: 'blue',
  }
}

console.log(theme`color`(data)) // 'blue'
console.log(theme`background`(data)) // '#444'
```
