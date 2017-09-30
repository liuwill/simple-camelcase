# simple-camelcase
  [![Build Status][travis-image]][travis-url]
  [![NPM version][npm-image]][npm-url]
  [![Code Climate][quality-image]][quality-url]
  [![Codecov branch][codecov-image]][codecov-url]

使用原生js实现的camelcase，目前仅支持下划线，使用原生语法，前端可以直接使用

## Installation

```shell
$ npm install --save simple-camelcase
```

## Usage：

```javascript
var simpleCamelcase = require("simple-camelcase")

simpleCamelcase.toUpperCamel('user_name')
// UserName

simpleCamelcase.toLowerCamel('user_name')
// userName
```

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/simple-camelcase.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simple-camelcase
[travis-image]: https://img.shields.io/travis/liuwill/simple-camelcase/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/liuwill/simple-camelcase
[quality-image]: https://img.shields.io/codeclimate/github/liuwill/simple-camelcase.svg?style=flat-square
[quality-url]: https://codeclimate.com/github/liuwill/simple-camelcase
[appveyor-image]: https://img.shields.io/appveyor/ci/liuwill/simple-camelcase/master.svg?style=flat-square
[appveyor-url]: https://ci.appveyor.com/project/liuwill/simple-camelcase
[codecov-image]: https://img.shields.io/codecov/c/github/liuwill/simple-camelcase.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/liuwill/simple-camelcase
