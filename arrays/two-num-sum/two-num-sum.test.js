const solution1 = require("./solution1");
const solution2 = require("./solution2");
const solution3 = require("./solution3");

test("Test case 1", () => {
  const arr = [-4, 2, 4, 15, 6, -9, 7];
  const targetSum = 19;

  // we perform a sort on the following returned arrays for testing purposes because
  // the question stated that the function may return the numbers in any order
  // hence we are sorting the returned arrays in order to perform tests on a consistent dataset
  const result1 = solution1(arr, targetSum).sort((a, b) => a - b);
  const result2 = solution2(arr, targetSum).sort((a, b) => a - b);
  const result3 = solution3(arr, targetSum).sort((a, b) => a - b);

  expect(result1).toEqual([4, 15]);
  expect(result2).toEqual([4, 15]);
  expect(result3).toEqual([4, 15]);
});

test("Test case 2", () => {
  const arr = [-4, 2, 4, 15, 6, -9, 7];
  const targetSum = 42;

  // we perform a sort on the following returned arrays for testing purposes because
  // the question stated that the function may return the numbers in any order
  // hence we are sorting the returned arrays in order to perform tests on a consistent dataset
  const result1 = solution1(arr, targetSum).sort((a, b) => a - b);
  const result2 = solution2(arr, targetSum).sort((a, b) => a - b);
  const result3 = solution3(arr, targetSum).sort((a, b) => a - b);

  expect(result1).toEqual([]);
  expect(result2).toEqual([]);
  expect(result3).toEqual([]);
});
