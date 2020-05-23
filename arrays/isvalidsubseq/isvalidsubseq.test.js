const solution = require("./solution");

test("Test case 1", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seq = [3, 5, 8];

  expect(solution(arr, seq)).toBe(true);
});

test("Test case 2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seq = [3, 1, 8];

  expect(solution(arr, seq)).toBe(false);
});

test("Test case 3", () => {
  const arr = [2, -19, 21, 8, 42, 9];
  const seq = [-19, 8];

  expect(solution(arr, seq)).toBe(true);
});

test("Test case 4", () => {
  const arr = [5, 6, -9, 31, 1, -11];
  const seq = [6, -11];

  expect(solution(arr, seq)).toBe(true);
});

test("Test case 1", () => {
  const arr = [8, 12, -3, 41, 3];
  const seq = [3, 8];

  expect(solution(arr, seq)).toBe(false);
});
