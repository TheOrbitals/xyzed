/**
 * A 3-Dimensional vector and associated utility functions
 */

export interface IVector {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface IMatrix {
  readonly r1c1: number; readonly r1c2: number; readonly r1c3: number;
  readonly r2c1: number; readonly r2c2: number; readonly r2c3: number;
  readonly r3c1: number; readonly r3c2: number; readonly r3c3: number;
}

/**
 * Vector constructor
 *
 * @param x
 * @param y
 * @param z
 * @returns a new `IVector`
 */
export function Vector(
  x: number = 0.0,
  y: number = 0.0,
  z: number = 0.0): IVector {
  return {x, y, z};
}

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
export function Matrix(
  r1c1: number = 0.0, r1c2: number = 0.0, r1c3: number = 0.0,
  r2c1: number = 0.0, r2c2: number = 0.0, r2c3: number = 0.0,
  r3c1: number = 0.0, r3c2: number = 0.0, r3c3: number = 0.0): IMatrix {
  return {
    r1c1, r1c2, r1c3,
    r2c1, r2c2, r2c3,
    r3c1, r3c2, r3c3,
  };
}

/**
 * Rotate a Vector with a Matrix
 *
 * @param vec the vector
 * @param mtx the matrix
 * @returns a new rotated `IVector`
 */
export function rotate(vec: IVector, mtx: IMatrix): IVector {
  const x: number = mtx.r1c1 * vec.x + mtx.r1c2 * vec.y + mtx.r1c3 * vec.z;
  const y: number = mtx.r2c1 * vec.x + mtx.r2c2 * vec.y + mtx.r2c3 * vec.z;
  const z: number = mtx.r3c1 * vec.x + mtx.r3c2 * vec.y + mtx.r3c3 * vec.z;
  return Vector(x, y, z);
}

/**
 * Add two vectors together
 *
 * @param xyz1 the first vector
 * @param xyz2 the second vector
 * @returns a new `IVector`
 */
export function add(xyz1: IVector, xyz2: IVector): IVector {
  const x: number = xyz1.x + xyz2.x;
  const y: number = xyz1.y + xyz2.y;
  const z: number = xyz1.z + xyz2.z;
  return Vector(x, y, z);
}

/**
 * Subtract two vectors from each other
 *
 * @param xyz1 the first vector
 * @param xyz2 the second vector
 * @returns a new `IVector`
 */
export function sub(xyz1: IVector, xyz2: IVector): IVector {
  const x: number = xyz1.x - xyz2.x;
  const y: number = xyz1.y - xyz2.y;
  const z: number = xyz1.z - xyz2.z;
  return Vector(x, y, z);
}

/**
 * Multiply a vector with a scalar value
 *
 * @param vec the vector
 * @param n the multiplier
 * @returns a new `IVector`
 */
export function mul(vec: IVector, n: number): IVector {
  const x: number = vec.x * n;
  const y: number = vec.y * n;
  const z: number = vec.z * n;
  return Vector(x, y, z);
}

/**
 * The absolute value of a vector
 *
 * @param vec the vector to use
 * @returns the absolute value
 */
export function abs(vec: IVector): number {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
}
