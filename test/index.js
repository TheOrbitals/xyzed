var should = require('chai').should();
var Xyz = require('../index');

describe('#add', function(){

  it('should add a vector to itself', function(){
    var self = new Xyz(3, 5, 7),
        vector = new Xyz(2, 6, 8);

    var result = self.add(vector);

    result.x.should.equal(5);
    result.y.should.equal(11);
    result.z.should.equal(15);
  });

});

describe('#sub', function(){

  it('should subtract a vector from itself', function(){
    var self = new Xyz(3, 5, 15),
        vector = new Xyz(2, 6, 8);

    var result = self.sub(vector);

    result.x.should.equal(1);
    result.y.should.equal(-1);
    result.z.should.equal(7);
  });

});

describe('#mul', function(){

  it('should multiply a scalar with itself', function(){
    var self = new Xyz(3, 5, -4);

    var result = self.mul(6);

    result.x.should.equal(18);
    result.y.should.equal(30);
    result.z.should.equal(-24);
  });

});

describe('#abs', function(){

  it('should return the absolute of itself', function(){
    var self = new Xyz(3, 5, -4);

    var result = self.abs();

    result.should.equal(7.0710678118654755);
  });

});

describe('#rotate', function(){

  it('should rotate itself given a matrix', function(){
    var self = new Xyz(3, 5, -4);
    var matrix = {
      a11:  2, a12: -3, a13:  9,
      a21: -6, a22:  1, a23:  5,
      a31:  7, a32: -4, a33: -1
    };

    var result = self.rotate(matrix);

    result.x.should.equal(-45);
    result.y.should.equal(-33);
    result.z.should.equal(5);
  });

});

