# ot-client
=======

A line-based implementation of Operational Transform in JavaScript


![Build Status](https://travis-ci.org/otjs/ot-client.svg?branch=master)
[![Dependency Status](https://david-dm.org/otjs/ot-client.svg)](https://david-dm.org/otjs/ot-client)

Install
-------

```shell
npm install ot-client
```

Usage
-----

```javascript
var diff = require('..').diff;
var expect = require('chai').expect;

describe('diff', function() {
  it('should return correct result', function() {
    tests.forEach(function(item) {
      expect(diff(item[0], item[1])).to.eql(item[2]);
    });
  });
});

var tests = [
  [
    [0, 1, 2, 3],
    [1, 2],
    [
      { type: 'del', line: 3 },
      { type: 'del', line: 0 }
    ]
  ],
  [
    [0, 1, 2, 3],
    [1, 1, 2, 3],
    [
      { type: 'del', line: 0 },
      { type: 'add', line: 0, text: 1 }
    ]
  ]
];
```
