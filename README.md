# togettheme

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
