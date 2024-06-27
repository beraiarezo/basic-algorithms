# **Counting Sort**

<p>
Counting Sort is a non-comparison-based sorting algorithm that works well when there is limited range of input values. It is particularly efficient when the range of input values is small compared to the number of elements to be sorted. The basic idea behind Counting Sort is to count the frequency of each distinct element in the input array and use that information to place the elements in their correct sorted positions.
</p>

<br/>
<br/>
<br/>

## Counting Sort Visualization

![Counting sort gif](../public/gifs/counting-sort.gif)

<br/>
<br/>

## Counting Sort Implementation

```
function CountingSort(elements) {
  const max = Math.max(...elements);

  let countArray = new Array(max + 1).fill(0);

  for (let i = 0; i < elements.length; i++) {
    countArray[elements[i]]++;
  }

  let output = [];

  for (let i = 0; i < max; i++) {
    while (countArray[i] > 0) {
      output.push(i);
      countArray[i]--;
    }
  }

  return output;
}

```

_To achieve counting sort, follow these steps:_

- Declare an auxiliary array countArray[] of size max(inputArray[])+1 and initialize it with 0.
- Traverse array inputArray[] and map each element of inputArray[] as an index of countArray[] array, i.e., execute countArray[inputArray[i]]++ for 0 <= i < N.
- Calculate the prefix sum at every index of array inputArray[].
- Create an array outputArray[] of size N.
- Traverse array inputArray[] from end and update outputArray[ countArray[ inputArray[i] ] – 1] = inputArray[i]. Also, update countArray[ inputArray[i] ] = countArray[ inputArray[i] ]- – .

<br />

### Time and Space Complexity

**Counting Sort Time**: where N and M are the size of inputArray[] and countArray[] respectively.
**Counting Sort Space**: where N and M are the space taken by outputArray[] and countArray[] respectively.

| COMPLEXITY       | Base case | Average | Worst  |
| ---------------- | --------- | ------- | ------ |
| Time Complexity  | O(n+m)    | O(n+m)  | O(n+m) |
| Space Complexity | O(n+m)    | O(n+m)  | O(n+m) |

<br />

#### Advantages:

- Counting sort generally performs faster than all comparison-based sorting algorithms, such as merge sort and quicksort, if the range of input is of the order of the number of input.
- Counting sort is easy to code
- Counting sort is a stable algorithm.

#### Disadvantage:

- Counting sort doesn’t work on decimal values.
- Counting sort is inefficient if the range of values to be sorted is very large.
- Counting sort is not an In-place sorting algorithm, It uses extra space for sorting the array elements.
