# **Merge Sort**

<p>
Merge Sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into halves until each subarray contains a single element, then merging those subarrays to produce a sorted array. Here's an explanation, followed by its advantages and disadvantages, and the steps to achieve merge sort.
</p>

<br/>
<br/>
<br/>

## Merge Sort Visualization

![Merge sort gif](../public/gifs/merge-sort.gif)

<br/>
<br/>

## Merge Sort Implementation

```
function merge(arr1, arr2) {
  let left = 0,
    right = 0,
    newArr = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      newArr.push(arr1[left]);
      left++;
    } else {
      newArr.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    newArr.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    newArr.push(arr2[right]);
    right++;
  }

  return newArr;
}

function MergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = MergeSort(array.slice(0, mid));
  let right = MergeSort(array.slice(mid));

  return merge(left, right);
}
```

_To achieve merge sort, follow these steps:_

- Implement the Divide Step: Write a function to split the array into two halves.
- Recursive Sort: Ensure that your function can call itself recursively to sort the halves.
- Merge Function: Write a function to merge two sorted arrays into a single sorted array.
- Combine and Test: Combine the divide, recursive sort, and merge functions to complete the merge sort algorithm and test it with different arrays to ensure it works correctly.

<br />

### Time and Space Complexity

**Merge Sort**

| COMPLEXITY       | Base case   | Average     | Worst       |
| ---------------- | ----------- | ----------- | ----------- |
| Time Complexity  | O(n log(n)) | O(n log(n)) | O(n log(n)) |
| Space Complexity | O(n)        | O(n)        | O(n)        |

<br />

#### Advantages

- Stable Sort: Merge sort maintains the relative order of equal elements, making it a stable sorting algorithm.
- O(n log n) Time Complexity: Merge sort has a consistent time complexity of O(n log n) for all cases (worst, average, and best).
- Parallelizable: The divide-and-conquer approach makes it suitable for parallel processing.
- External Sorting: Merge sort is ideal for sorting large datasets that do not fit into memory, as it can work efficiently with external storage.

#### Disadvantages

- Space Complexity: Merge sort requires O(n) additional space for the temporary arrays used in the merge process, which can be a disadvantage for large datasets.
- Not In-Place: Due to its additional space requirement, merge sort is not an in-place sorting algorithm.
- Overhead: The recursion and additional array operations add overhead, making it less efficient than algorithms like quicksort for small datasets or datasets that are already nearly sorted.
