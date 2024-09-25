# **Binary Search Tree (BST)**

<p>
A binary search tree (BST) is a tree data structure where each node has at most two children referred to as the left child and the right child. For every node, all elements in its left subtree are smaller, and all elements in its right subtree are larger. This property allows for efficient searching, insertion, and deletion of elements.
</p>

<br/>
<br/>
<br/>

## Binary Search Tree Visualization

![binary-search-tree](../public/pngs/binarysearchtree.png)

<br/>
<br/>

## Binary Search Tree Description

> A binary search tree is a hierarchical data structure that organizes elements in a sorted manner to allow for efficient lookups, insertions, and deletions. Each node in the tree contains a data element, a reference to a left child, and a reference to a right child. The root node serves as the starting point for all operations, and the tree is structured so that for every node, the values in the left subtree are smaller, and the values in the right subtree are larger. This property of the BST makes it useful for quick search operations.

<br/>
<br/>

_To implement basic operations for a binary search tree (BST), follow these steps:_

- Inserting: To add a new element, start from the root and compare the new data to the current node. If the new data is smaller, go to the left subtree; if it's larger, go to the right subtree. Continue this process recursively until you find an appropriate null position for the new node.
- Searching: To find a specific value, start at the root and follow the same process as insertion: traverse left or right based on the value being searched, until the desired value is found or the subtree is null.
- Traversing (In-order): To print all elements in a sorted manner, perform an in-order traversal by recursively visiting the left subtree, the current node, and then the right subtree.

<br />

### Time and Space Complexity

**Binary Search Tree**: The performance of a BST heavily depends on the tree's balance. In a balanced tree, operations like insertion, deletion, and search are very efficient, but in a skewed tree, they degrade to linear time.

| OPERATION            | Time Complexity (Balanced) | Time Complexity (Unbalanced) | Space Complexity |
| -------------------- | -------------------------- | ---------------------------- | ---------------- |
| Insertion            | O(log n)                   | O(n)                         | O(1)             |
| Deletion             | O(log n)                   | O(n)                         | O(1)             |
| Search               | O(log n)                   | O(n)                         | O(1)             |
| Traversal (In-order) | O(n)                       | O(n)                         | O(1)             |

<br />
