# xyzed

A 3-dimensional vector (pronouced X Y Zed)

## Installation

    npm install git://github.com/theorbitals/xyzed.git --save

## Usage

    var Xyz = require('zyzed');
    var x = 3, y = 5, z = 7;
    var vector = new Xyz(x, y, z);
    var result = vector.mul(4);

## Tests

    npm test

## Functions

* add(vec)         // Adds a vector to itself
* sub(vec)         // Subtracts a vector from itself
* mul(int)         // Multiplies a vector with a scalar
* rotate(matrix)   // Rotation of a vector with a matrix
* abs()            // Returns the absolute of the vector

## Contributing

Pull requests welcomed. Please lint and supply new/updated tests for your code.

## Release history

* 0.1.0 Initial release

