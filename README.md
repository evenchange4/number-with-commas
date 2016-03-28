# number-with-commas

> Convert a Number to a string with commas.
>
> by [Luis Eduardo Rojas Cabrera](http://stackoverflow.com/a/27761572/1932742)

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coverage Status][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/evenchange4/number-with-commas/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/number-with-commas

[npm-badge]: https://img.shields.io/npm/v/number-with-commas.svg?style=flat-square
[npm]: https://www.npmjs.org/package/number-with-commas

[coveralls-badge]: https://img.shields.io/coveralls/evenchange4/number-with-commas/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/evenchange4/number-with-commas

## Installation

```console
$ npm install number-with-commas --save
```

[Quick DEMO on tonicdev](https://tonicdev.com/evenchange4/number-with-commas)

## Usage

```js
import numberWithCommas from 'number-with-commas';

t.is(numberWithCommas(10000), '10,000');
t.is(numberWithCommas(-10000), '-10,000');
t.is(numberWithCommas(1000.1001), '1,000.1,001');
```

## API

```js
numberWithCommas(
  x: number,
): string
```

## Test

```
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
