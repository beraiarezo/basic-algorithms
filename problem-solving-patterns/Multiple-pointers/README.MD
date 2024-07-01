# **Multiple Pointers**

<p>
The two-pointer technique is a powerful and versatile approach used to solve various algorithmic problems efficiently. It involves using two pointers to traverse and manipulate data structures like arrays or strings, often in linear time. Here's a detailed description:
</p>

### Concept:

- **Two pointers**: As the name suggests, this technique uses two pointers (or indices) to keep track of positions within a data structure.
- **Initial positions**: These pointers can start at different positions based on the problem requirements:
- - Both pointers at the beginning (for problems like finding duplicates or pairs with a certain property).
- - One pointer at the beginning and one at the end (for problems involving sums, averages, or finding subarrays).
    <br/>

## When is the Multiple Pointers pattern appropriate to use?

When you need to find pairs or triplets of elements in an array that satisfy a certain condition (e.g., summing to a specific value), the Multiple Pointers pattern can significantly reduce the time complexity from O(n<sup>2</sup>) or O(n<sup>3</sup>) to O(n).

> **Finding pairs**: Problems that require finding pairs of elements that satisfy certain conditions (e.g., pairs that add up to a specific sum).
> **Subsequence checks**: Determining if one sequence is a subsequence of another.
> **Merging sorted arrays**: Merging two sorted arrays or lists into one sorted array.

<br/>

### Time and Space Complexity

| COMPLEXITY      | Base case | Average | Worst |
| --------------- | --------- | ------- | ----- |
| Time Complexity | O(n)      | O(n)    | O(n)  |

<br />
