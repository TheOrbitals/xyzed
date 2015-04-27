/**
 * 3-Dimensional Vector
 */

// Constructor
function Xyzed(x, y, z){
  this.x = x || 0.0;
  this.y = y || 0.0;
  this.z = z || 0.0;
}

// Instance methods
var xyzed = {

  /**
   * Rotation of Vector with Matrix
   */
  rotate: function(mtx) {
    var x = mtx.a11 * this.x + mtx.a12 * this.y + mtx.a13 * this.z;
    var y = mtx.a21 * this.x + mtx.a22 * this.y + mtx.a23 * this.z;
    var z = mtx.a31 * this.x + mtx.a32 * this.y + mtx.a33 * this.z;
    return new Xyzed(x, y, z);
  },

  /**
   * V := V1 + V2
   */
  add: function(xyz) {
    var x = this.x + xyz.x;
    var y = this.y + xyz.y;
    var z = this.z + xyz.z;
    return new Xyzed(x, y, z);
  },

  /**
   * V := V1 - V2
   */
  sub: function(xyz) {
    var x = this.x - xyz.x;
    var y = this.y - xyz.y;
    var z = this.z - xyz.z;
    return new Xyzed(x, y, z);
  },

  /**
   * V := x * V;
   */
  mul: function(a) {
    var x = this.x * a;
    var y = this.y * a;
    var z = this.z * a;
    return new Xyzed(x, y, z);
  },

  /**
   * x := abs(V);
   */
  abs: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

};

/**
 * Wire up the module
 */
Xyzed.prototype = xyzed;
module.exports = Xyzed;
