/**
 *
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * BST implemented with methods that have an iterative solutions.
 * Documentation for each function can be found in the [README](https://github.com/sonjeet/js-interview/tree/master/datastructures/binary-search-tree) of this section
 */

class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  /**
   *
   * Time complexity:
   *  Average case: O(log(n))
   *  Worst case: O(n)
   *
   * Space complexity:
   *  Average case: O(1)
   *  Worst case: O(1)
   *
   * Average case occurs when BST is balanced
   * Worst case occurs when BST is heavily right sided i.e. if every child node is greater than its parent node
   */
  insert(val) {
    let currentNode = this;
    while (true) {
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(val);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /**
   *
   * Time complexity:
   *  Average case: O(log(n))
   *  Worst case: O(n)
   *
   * Space complexity:
   *  Average case: O(1)
   *  Worst case: O(1)
   *
   * Average case occurs when BST is balanced
   * Worst case occurs when BST is heavily right sided i.e. if every child node is greater than its parent node
   */
  find(val) {
    let currentNode = this;
    while (currentNode !== null) {
      if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   *
   * Time complexity:
   *  Average case: O(log(n))
   *  Worst case: O(n)
   *
   * Space complexity:
   *  Average case: O(1)
   *  Worst case: O(1)
   *
   * Average case occurs when BST is balanced
   * Worst case occurs when BST is heavily right sided i.e. if every child node is greater than its parent node
   */
  remove(val, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (val < currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode = currentNode.right.getMinVal();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode = currentNode.left;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode = currentNode.right;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
      }
    }
  }

  /**
   *
   * @returns {BST} - this will be the node with the lowest value that exists in the BST
   */
  getMinVal() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

exports.BST = BST;
