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
