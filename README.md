# number-with-commas

[![Greenkeeper badge](https://badges.greenkeeper.io/evenchange4/number-with-commas.svg)](https://greenkeeper.io/)

> Convert a Number to a string with commas.
>
> by [Luis Eduardo Rojas Cabrera](http://stackoverflow.com/a/27761572/1932742)

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/number-with-commas/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/number-with-commas

[npm-badge]: https://img.shields.io/npm/v/number-with-commas.svg?style=flat-square
[npm]: https://www.npmjs.org/package/number-with-commas

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/number-with-commas.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/number-with-commas?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/number-with-commas.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/number-with-commas.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/number-with-commas.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/number-with-commas
[devDependency-badge]: https://david-dm.org/evenchange4/number-with-commas/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/number-with-commas#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/number-with-commas/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/number-with-commas#info=peerDependencies

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
$ npm run lint
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
