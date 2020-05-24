const solution1 = require("./solution1");
const solution2 = require("./solution2");
const solution3 = require("./solution3");

test("Test case 1", () => {
  const str = "madam";

  expect(solution1(str)).toBe(true);
  expect(solution2(str)).toBe(true);
  expect(solution3(str)).toBe(true);
});

test("Test case 2", () => {
  const str = "noon";

  expect(solution1(str)).toBe(true);
  expect(solution2(str)).toBe(true);
  expect(solution3(str)).toBe(true);
});

test("Test case 3", () => {
  const str = "rotor";

  expect(solution1(str)).toBe(true);
  expect(solution2(str)).toBe(true);
  expect(solution3(str)).toBe(true);
});

test("Test case 4", () => {
  const str = "hello";

  expect(solution1(str)).toBe(false);
  expect(solution2(str)).toBe(false);
  expect(solution3(str)).toBe(false);
});

test("Test case 5", () => {
  const str = "abcdcba";

  expect(solution1(str)).toBe(true);
  expect(solution2(str)).toBe(true);
  expect(solution3(str)).toBe(true);
});

test("Test case 6", () => {
  const str = "githubbbbb";

  expect(solution1(str)).toBe(false);
  expect(solution2(str)).toBe(false);
  expect(solution3(str)).toBe(false);
});
