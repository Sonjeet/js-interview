const { BST } = require('./bst-recursive');

// insert the value 48 into bst
test('Test case 1', () => {
  const root = new BST(27);
  root.left = new BST(18);
  root.left.left = new BST(11);
  root.left.right = new BST(20);
  root.right = new BST(42);
  root.right.left = new BST(31);

  root.insert(48);

  expect(root.right.right.value).toBe(48);
  expect(root.value).toBe(27);
  expect(root.left.value).toBe(18);
  expect(root.left.left.value).toBe(11);
  expect(root.left.right.value).toBe(20);
  expect(root.right.value).toBe(42);
  expect(root.right.left.value).toBe(31);
});

// insert the value 20 to be a right child of the root node
test('Test case 2', () => {
  const root = new BST(17);
  root.left = new BST(8);

  root.insert(20);

  expect(root.right.value).toBe(20);
  expect(root.left.value).toBe(8);
  expect(root.value).toBe(17);
});

// remove the root node which has 2 children
test('Test case 3', () => {
  const root = new BST(6);
  root.left = new BST(3);
  root.left.left = new BST(1);
  root.right = new BST(11);
  root.right.left = new BST(9);

  root.remove(root.value);

  expect(root.value).toBe(9);
  expect(root.left.value).toBe(3);
  expect(root.left.left.value).toBe(1);
  expect(root.right.value).toBe(11);
});

// remove the root node which only has a left child
// root node replaced with 17
test('Test case 4', () => {
  const root = new BST(24);
  root.left = new BST(17);
  root.left.left = new BST(7);
  root.left.right = new BST(19);
  root.left.left.left = new BST(3);
  root.left.left.right = new BST(12);

  root.remove(root.value);

  expect(root.value).toBe(17);
  expect(root.left.value).toBe(7);
  expect(root.right.value).toBe(19);
  expect(root.left.left.value).toBe(3);
  expect(root.left.right.value).toBe(12);
});

// remove the root node which only has a right child
test('Test case 5', () => {
  const root = new BST(33);
  root.right = new BST(61);
  root.right.left = new BST(42);
  root.right.right = new BST(72);

  root.remove(root.value);

  expect(root.value).toBe(61);
  expect(root.left.value).toBe(42);
  expect(root.right.value).toBe(72);
});

// remove the node with value 63 which has 2 children nodes
test('Test case 6', () => {
  const root = new BST(47);
  root.right = new BST(63);
  root.right.left = new BST(56);
  root.right.right = new BST(84);
  root.right.right.left = new BST(80);
  root.left = new BST(21);
  root.left.left = new BST(18);
  root.left.right = new BST(32);

  root.remove(63);

  expect(root.value).toBe(47);
  expect(root.right.value).toBe(80);
  expect(root.right.left.value).toBe(56);
  expect(root.right.right.value).toBe(84);
  expect(root.left.value).toBe(21);
  expect(root.left.left.value).toBe(18);
  expect(root.left.right.value).toBe(32);
});

// contains
test('Test case 7', () => {
  const root = new BST(47);
  root.right = new BST(63);
  root.right.left = new BST(56);
  root.right.right = new BST(84);
  root.right.right.left = new BST(80);
  root.left = new BST(21);
  root.left.left = new BST(18);
  root.left.right = new BST(32);

  expect(root.contains(47)).toBe(true);
  expect(root.contains(63)).toBe(true);
  expect(root.contains(56)).toBe(true);
  expect(root.contains(84)).toBe(true);
  expect(root.contains(80)).toBe(true);
  expect(root.contains(21)).toBe(true);
  expect(root.contains(18)).toBe(true);
  expect(root.contains(32)).toBe(true);
  expect(root.contains(3)).toBe(false);
  expect(root.contains(1023)).toBe(false);
  expect(root.contains(8)).toBe(false);
  expect(root.contains(92)).toBe(false);
  expect(root.contains(12)).toBe(false);
});
