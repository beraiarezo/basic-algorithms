/**
 * MaxSubarraySum finds the maximum sum of a subarray of length 'num' within the array 'arr'.
 * @param {number[]} arr - The array of numbers in which to find the subarray.
 * @param {number} num - The length of the subarray for which to find the maximum sum.
 * @returns {number|null} - Returns the maximum sum of the subarray of length 'num', or null if 'num' is greater than the array length.
 */

function MaxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  let currentSum = sum;
  for (let i = num; i < arr.length; i++) {
    currentSum = arr[i] + (currentSum - arr[i - num]);
    if (currentSum > sum) {
      sum = currentSum;
    }
  }

  return sum;
}

/**
 * MinSubArrayLen finds the minimum length of a contiguous subarray of numbers in 'nums' that has a sum greater than or equal to 'sum'.
 * @param {number[]} nums - The array of numbers in which to find the subarray.
 * @param {number} sum - The target sum that the subarray should be greater than or equal to.
 * @returns {number} - Returns the minimum length of the contiguous subarray that meets the sum condition.
 */

function MinSubArrayLen(nums, sum) {
  let total = 0,
    start = 0,
    end = 0,
    minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/**
 * findLongestSubstring finds the length of the longest substring in 'str' with all distinct characters.
 * @param {string} str - The string in which to find the longest substring with all distinct characters.
 * @returns {number} - Returns the length of the longest substring with all distinct characters.
 */

function findLongestSubstring(str) {
  let seen = {},
    longest = 0,
    start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
}

console.debug(findLongestSubstring("thisisawesome"));
