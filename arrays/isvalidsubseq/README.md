# Validate a Subsequence ![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

## Task

For two _non-empty_ arrays, write an algorithm that determines whether the second array is a subsequence of the first array. Return a boolean `true` when the second array is a valid subsequence of the first array.

If you are unfamiliar with what a sequence/subsequence is, I recommend checking out the wikipedia page on [sequences](https://en.wikipedia.org/wiki/Sequence). Sequences are commonly used in computer science/discrete maths so it would be wise to be familiar with them.

## More Details

- For those that did not view the wikipedia link above, a subsequence of an array is an ordered collection of numbers that exist within the array, but they do not need to be adjacent to each other. For example, `[2, 4, 6]` is a subsequence of `[1, 2, 3, 4, 5, 6, 7, 8]`.
- You may assume that the array and subsequence are not empty.
- You may return `false` if the second array is not a valid subsequence of the first array.

## Function signature

```javascript
function isValidSubsequence(arr, seq) {
  // write solution here...
}
```

## Expected Behaviour

### Sample Input

```javascript
arr = [-2, 6, 12, 3, 91, 15, -21, 8];
seq = [6, 15, -21];
```

### Sample Output

```javascript
true // this would be false if the second array was not a valid subsequence
```
