# checkdir

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Check if dir exists, if it's empty and how many files are directly inside it.


## Install

```
$ npm install checkdir
```


## Usage

```js
var checkdir = require('checkdir');

checkdir('/some/test/dir').then(info => console.log(info));
//=> {
//    empty: false,
//    exists: true,
//    files: 1
// }
```


## API

### checkdir(directoryPath)

#### directoryPath

*Required*
Type: `string`

Path to directory.

## License

MIT © [DaveJ](https://twitter.com/DaveJ)

[npm-image]: https://badge.fury.io/js/checkdir.svg
[npm-url]: https://npmjs.org/package/checkdir
[travis-image]: https://travis-ci.org/davej/checkdir.svg
[travis-url]: https://travis-ci.org/davej/checkdir
[coveralls-image]: https://coveralls.io/repos/davej/checkdir/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/davej/checkdir?branch=master
[david_img]: https://david-dm.org/davej/checkdir.svg
[david_site]: https://david-dm.org/davej/checkdir
