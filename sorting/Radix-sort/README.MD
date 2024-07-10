# **Radix Sort**

<p>
Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. It sorts numbers digit by digit, starting from the least significant digit (LSD) to the most significant digit (MSD), or vice versa. Here's how it works:
</p>

<br/>
<br/>
<br/>

## Radix Sort Visualization

![Radix sort gif](../public/gifs/radix-sort.gif)

<br/>
<br/>

## Radix Sort Implementation

```
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function RadixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}
```

_To achieve radix sort, follow these steps:_

- Find the Maximum Number of Digits: Determine the maximum number of digits in the largest number in the array.
- Initialize Buckets: Create buckets for each digit (0-9).
- Sort by Least Significant Digit (LSD):
  - Extract the least significant digit of each number.
  - Place each number into the corresponding bucket.
  - Collect numbers from the buckets in order.
- Repeat for Next Digits:
  - Move to the next significant digit.
  - Repeat the sorting and collecting process.
- Complete for All Digits: Continue until all digits are processed.

<br />

### Time and Space Complexity

**Radix Sort**

| COMPLEXITY       | Base case | Average   | Worst     |
| ---------------- | --------- | --------- | --------- |
| Time Complexity  | O(n \* k) | O(n \* k) | O(n \* k) |
| Space Complexity | O(n + k)  | O(n + k)  | O(n + k)  |

<br />

#### Advantages

- Linear Time Complexity: Radix sort can achieve O(nk) time complexity, where n is the number of elements and k is the number of digits in the largest number.
- Efficient for Large Numbers: It is particularly efficient for sorting large numbers or strings where the number of digits or characters is limited.
- Non-Comparative Sorting: Radix sort does not rely on comparisons, making it advantageous over comparison-based sorting algorithms in certain scenarios.

#### Disadvantages

- Space Complexity: Requires additional space for buckets and output arrays, leading to O(n) auxiliary space usage.
- Dependent on Stable Sort: Radix sort requires a stable sorting algorithm (like counting sort) for each digit level, which can introduce additional complexity.
- Limited to Specific Data Types: Radix sort is generally used for sorting integers or strings and may not be suitable for all data types.
