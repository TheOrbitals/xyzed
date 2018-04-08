"use strict";
/**
 * A 3-Dimensional vector and associated utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vector constructor
 *
 * @param x
 * @param y
 * @param z
 * @returns a new `IVector`
 */
function Vector(x, y, z) {
    if (x === void 0) { x = 0.0; }
    if (y === void 0) { y = 0.0; }
    if (z === void 0) { z = 0.0; }
    return { x: x, y: y, z: z };
}
exports.Vector = Vector;
/**
 * Matrix constructor
 * @param r1c1 row 1 column 1
 * @param r1c2 row 1 column 2
 * @param r1c3 row 1 column 3
 * @param r2c1 row 2 column 1
 * @param r2c2 row 2 column 2
 * @param r2c3 row 2 column 3
 * @param r3c1 row 3 column 1
 * @param r3c2 row 3 column 2
 * @param r3c3 row 3 column 3
 * @returns a new `IMatrix`
 */
function Matrix(r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3) {
    if (r1c1 === void 0) { r1c1 = 0.0; }
    if (r1c2 === void 0) { r1c2 = 0.0; }
    if (r1c3 === void 0) { r1c3 = 0.0; }
    if (r2c1 === void 0) { r2c1 = 0.0; }
    if (r2c2 === void 0) { r2c2 = 0.0; }
    if (r2c3 === void 0) { r2c3 = 0.0; }
    if (r3c1 === void 0) { r3c1 = 0.0; }
    if (r3c2 === void 0) { r3c2 = 0.0; }
    if (r3c3 === void 0) { r3c3 = 0.0; }
    return {
        r1c1: r1c1, r1c2: r1c2, r1c3: r1c3,
        r2c1: r2c1, r2c2: r2c2, r2c3: r2c3,
        r3c1: r3c1, r3c2: r3c2, r3c3: r3c3,
    };
}
exports.Matrix = Matrix;
/**
 * Rotate a Vector with a Matrix
 *
 * @param vec the vector
 * @param mtx the matrix
 * @returns a new rotated `IVector`
 */
function rotate(vec, mtx) {
    var x = mtx.r1c1 * vec.x + mtx.r1c2 * vec.y + mtx.r1c3 * vec.z;
    var y = mtx.r2c1 * vec.x + mtx.r2c2 * vec.y + mtx.r2c3 * vec.z;
    var z = mtx.r3c1 * vec.x + mtx.r3c2 * vec.y + mtx.r3c3 * vec.z;
    return Vector(x, y, z);
}
exports.rotate = rotate;
/**
 * Add two vectors together
 *
 * @param v1 the first vector
 * @param v2 the second vector
 * @returns a new `IVector`
 */
function add(v1, v2) {
    var x = v1.x + v2.x;
    var y = v1.y + v2.y;
    var z = v1.z + v2.z;
    return Vector(x, y, z);
}
exports.add = add;
/**
 * Subtract two vectors from each other
 *
 * @param v1 the first vector
 * @param v2 the second vector
 * @returns a new `IVector`
 */
function sub(v1, v2) {
    var x = v1.x - v2.x;
    var y = v1.y - v2.y;
    var z = v1.z - v2.z;
    return Vector(x, y, z);
}
exports.sub = sub;
/**
 * Multiply a vector with a scalar value
 *
 * @param vec the vector
 * @param n the multiplier
 * @returns a new `IVector`
 */
function mul(vec, n) {
    var x = vec.x * n;
    var y = vec.y * n;
    var z = vec.z * n;
    return Vector(x, y, z);
}
exports.mul = mul;
/**
 * The absolute value of a vector
 *
 * @param vec the vector to use
 * @returns the absolute value
 */
function abs(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
}
exports.abs = abs;
