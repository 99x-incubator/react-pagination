# @99xt/pagination-react

[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
[![license](https://img.shields.io/github/license/99xt/react-pagination.svg)](https://github.com/99xt/react-pagination/blob/master/LICENSE)
[![Build Status](https://api.travis-ci.org/99xt/react-pagination.png?branch=master)](https://travis-ci.org/99xt/react-pagination)


[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

Simple pagination component for React JS apps.


## Installation

To install this library, run:

```bash
npm install @99xt/pagination-react --save
```

## Usage

example.react.js

```html
<pagination
  total="totalRecordCount"
  limit="recordsPerPage"
>
</pagination>
```

## Contributing Guide

### Setting up the development environment

Clone the repository to your workstation

```bash
git clone git@github.com:99xt/react-pagination.git
```

Navigate to the project directory 

```bash
cd react-pagination
```

Install and build the library

```bash
npm install
```

### Run Demo app

```
npm install
npm start
```

check localhost:3000 to see the preview of the demo

### Publish to NPM

Update the version in `package.json`;

```
npm run build
npm publish
```

## License

MIT
