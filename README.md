[![Build Status](https://travis-ci.org/TheOrbitals/xyzed.svg?branch=master)](https://travis-ci.org/TheOrbitals/xyzed)

# xyzed

A 3-dimensional vector and associated utility functions (pronouced: Ex Why Zed)

## Installation

    npm install xyzed --save

## Usage

    const {Vector, mul} = require('xyzed');
    const x = 3, y = 5, z = 7;
    const vec = Vector(x, y, z); // or {x, y, z}
    const result = mul(vec, 4);
    // result becomes a new vector: {x: 12, y: 20, z: 28}

## Tests

    npm test

## Functions

* `add(v1, v2)` Adds two vectors
* `sub(v1, v2)` Subtracts two vectors
* `mul(vec, int)` Multiplies a vector with a scalar
* `rotate(vec, matrix)` Rotates a vector with a matrix
* `abs(vec)` Returns the absolute value of a vector

## Contributing

Pull requests welcomed. Please lint and supply new/updated tests for your code.

## Release history

* 0.1.0 Initial release
* 0.2.0 Convert to TypeScript. Replace Mocha/Chai with Jest. Change license to Apache-2.0.
