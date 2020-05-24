const BST = {
  iterative: require("./bst-iterative").BST,
  // TODO: recursive approach for bst
};

test("Test case 1", () => {
  const root = new BST.iterative(10);
  root.left = new BST.iterative(6);
  root.left.left = new BST.iterative(3);
  root.left.right = new BST.iterative(7);
  root.right = new BST.iterative(15);
  root.right.left = new BST.iterative(13);

  root.insert(18);
  expect(root.right.right.value).toBe(18);
});

test("Test case 2", () => {
  const root = new BST.iterative(10);
  root.right = new BST.iterative(12);
  root.right.right = new BST.iterative(14);
  root.right.right.right = new BST.iterative(17);
  root.right.right.right.right = new BST.iterative(24);
  root.right.right.right.right.right = new BST.iterative(71);

  root.insert(88);
  expect(root.value).toBe(10);
  expect(root.right.value).toBe(12);
  expect(root.right.right.value).toBe(14);
  expect(root.right.right.right.value).toBe(17);
  expect(root.right.right.right.right.value).toBe(24);
  expect(root.right.right.right.right.right.value).toBe(71);
  expect(root.right.right.right.right.right.right.value).toBe(88);
});

//TODO: ADD MORE TESTS TOMORROW, AND IMPLEMENT RECURSIVE STRATEGY
