![logo](https://user-images.githubusercontent.com/7692626/30778463-2e0a6c64-a0f4-11e7-9f81-f44dd0538caf.png)

# @99xt/react-pagination

[![npm package][npm-badge]][npm]
[![Coveralls](https://coveralls.io/repos/github/99xt/react-pagination/badge.svg?branch=master)](https://coveralls.io/github/99xt/react-pagination?branch=master) 
[![license](https://img.shields.io/github/license/99xt/react-pagination.svg)](https://github.com/99xt/react-pagination/blob/master/LICENSE)
[![Build Status](https://api.travis-ci.org/99xt/react-pagination.png?branch=master)](https://travis-ci.org/99xt/react-pagination)


[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

Simple pagination component for React JS apps.

### Demo 

[Demo URL](http://react-pagination-demo-99xt.surge.sh)


## Installation

To install this library, run:

```bash
npm install @99xt/react-pagination --save
```

## Usage

example.react.js

```javascript
  constructor(props) {
    super(props);
    this.state={
      'selectedPage':1
    }
    this.getSelectedPage = this.getSelectedPage.bind(this)
    
  }
  getSelectedPage(k) {
    this.setState({
      'selectedPage': k
    })
  }
  render() {
    return <div>
      <h1>pagination-react Demo</h1>
      <react-pagination 
        total='totalRecordCount'
        limit='recordsPerPage'
        returnSelectedPage={this.getSelectedPage} />
      <br />
      <h2>{"Selected page : " + this.state.selectedPage}</h2>
    </div>
  }
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

### Acknowledgement

react-pagination is initially developed for the Hacktitude open source hackathon. Special thanks goes to project mentors [@thinkholic](https://github.com/thinkholic), [@lakindu95](https://github.com/lakindu95), [@PramithaSamarakoon](https://github.com/PramithaSamarakoon) and awesome [Dotitude](http://dotitude.com/) Family from [99xt](http://www.99xtechnology.com/).

## License

MIT
