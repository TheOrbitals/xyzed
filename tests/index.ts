import {abs, add, Matrix, mul, rotate, sub, Vector} from "../src/index";

test("add() should add two vectors", () => {
  const v1: IVector = Vector(3, 5, 7);
  const v2: IVector = Vector(2, 6, 8);

  const result: IVector = add(v1, v2);

  expect(result.x).toBe(5);
  expect(result.y).toBe(11);
  expect(result.z).toBe(15);
});

test("sub() should subtract a vector from another vector", () => {
  const v1: IVector = Vector(3, 5, 15);
  const v2: IVector = Vector(2, 6, 8);

  const result: IVector = sub(v1, v2);

  expect(result.x).toBe(1);
  expect(result.y).toBe(-1);
  expect(result.z).toBe(7);
});

it("mul() should multiply a scalar with a vector", () => {
  const vec: IVector = Vector(3, 5, -4);

  const result: IVector = mul(vec, 6);

  expect(result.x).toBe(18);
  expect(result.y).toBe(30);
  expect(result.z).toBe(-24);
});

it("abs() should return the absolute value of a vector", () => {
  const vec: IVector = Vector(3, 5, -4);

  const result: number = abs(vec);

  expect(result).toBe(7.0710678118654755);
});

it("rotate() should rotate a vector with a matrix", () => {
  const vec: IVector = Vector(3, 5, -4);
  const mtx: IMatrix = Matrix(
    2, -3, 9,
    -6, 1, 5,
    7, -4, -1,
  );

  const result: IVector = rotate(vec, mtx);

  expect(result.x).toBe(-45);
  expect(result.y).toBe(-33);
  expect(result.z).toBe(5);
});
