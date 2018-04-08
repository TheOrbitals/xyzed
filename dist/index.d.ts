/**
 * A 3-Dimensional vector and associated utility functions
 */
export interface IVector {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}
export interface IMatrix {
    readonly r1c1: number;
    readonly r1c2: number;
    readonly r1c3: number;
    readonly r2c1: number;
    readonly r2c2: number;
    readonly r2c3: number;
    readonly r3c1: number;
    readonly r3c2: number;
    readonly r3c3: number;
}
/**
 * Vector constructor
 *
 * @param x
 * @param y
 * @param z
 * @returns a new `IVector`
 */
export declare function Vector(x?: number, y?: number, z?: number): IVector;
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
export declare function Matrix(r1c1?: number, r1c2?: number, r1c3?: number, r2c1?: number, r2c2?: number, r2c3?: number, r3c1?: number, r3c2?: number, r3c3?: number): IMatrix;
/**
 * Rotate a Vector with a Matrix
 *
 * @param vec the vector
 * @param mtx the matrix
 * @returns a new rotated `IVector`
 */
export declare function rotate(vec: IVector, mtx: IMatrix): IVector;
/**
 * Add two vectors together
 *
 * @param xyz1 the first vector
 * @param xyz2 the second vector
 * @returns a new `IVector`
 */
export declare function add(xyz1: IVector, xyz2: IVector): IVector;
/**
 * Subtract two vectors from each other
 *
 * @param xyz1 the first vector
 * @param xyz2 the second vector
 * @returns a new `IVector`
 */
export declare function sub(xyz1: IVector, xyz2: IVector): IVector;
/**
 * Multiply two vectors together
 *
 * @param vec the vector
 * @param n the multiplier
 * @returns a new `IVector`
 */
export declare function mul(vec: IVector, n: number): IVector;
/**
 * The absolute value of a vector
 *
 * @param vec the vector to use
 * @returns the absolute value
 */
export declare function abs(vec: IVector): number;
