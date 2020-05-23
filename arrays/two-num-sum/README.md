# Two Number Sum ![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

## Task

For a given array of integers, find a pair of numbers that sum up to a specified `targetSum` value. Once you find a pair, return the two numbers as an array of numbers. If a pair does not exist, return an empty array.

## More Details

- You may assume that the array is _non-empty_ and at most it will only ever have **one** pair.
- The target sum may only be obtained by adding two different integers i.e. you can't add a single integer with itself to reach the target sum.
- The array is unsorted by nature.
- The array may have negative or positive integers. The target sum may be negative or positive too.

## Function signature

```javascript
function twoNumSum(arr, targetSum) {
  // write solution here...
}
```

## Expected Behaviour

### Sample Input

```javascript
arr = [-4, 2, 4, 15, 6, -9, 7];
targetSum = 19;
```

### Sample Output

```javascript
// the numbers in the array may be in any order
// empty array would've been returned if a matching pair didn't exist
[15, 4]
```
