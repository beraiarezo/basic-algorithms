# **Frequency Counter**

<p>
The Frequency Counter pattern utilizes an object or set to gather values and their frequencies. Commonly applied to arrays or strings, this pattern helps eliminate the need for nested loops, thus avoiding quadratic time complexity (O(n²)).
</p>

<br/>
## When is the Frequency Counter pattern appropriate to use?

> Counting Occurrences: When you need to count the frequency of elements in a collection, such as the number of times each character appears in a string or each number appears in an array.

> Comparing Collections: When comparing two collections to check if they have the same elements with the same frequencies, such as determining if two strings are anagrams.

> Finding Duplicates: When identifying duplicate elements within a collection by tracking their occurrences.

> Optimizing Performance: When you want to avoid nested loops that lead to quadratic time complexity (O(n²)), as the Frequency Counter pattern typically operates in linear time (O(n)).

<br/>

### Time and Space Complexity

**Bubble Sort**: It performs well on small arrays or when the input array is nearly sorted.

| COMPLEXITY      | Base case | Average | Worst |
| --------------- | --------- | ------- | ----- |
| Time Complexity | O(n)      | O(n)    | O(n>) |

<br />
