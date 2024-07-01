/**
 * AveragePair checks if there exists a pair of numbers in the array whose average is equal to the given value.
 * @param {number[]} nums - An array of numbers
 * @param {number} average - The target average value
 * @returns {boolean} - Returns true if there exists a pair of numbers whose average equals the target value, otherwise false.
 */
function AveragePair(nums, average) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    let av = (nums[left] + nums[right]) / 2;
    if (average === av) {
      return true;
    }

    if (av < average) left++;
    else right--;
  }

  return false;
}

/**
 * IsSubsequence checks if the characters of the first string appear in the second string in the same order.
 * @param {string} string1 - The first string to check if it is a subsequence
 * @param {string} string2 - The second string to check against
 * @returns {boolean} - Returns true if the first string is a subsequence of the second string, otherwise false.
 */
function IsSubsequence(string1, string2) {
  let left = 0,
    right = 0;

  while (right < string2.length) {
    if (string1[left] === string2[right]) {
      left++;
      right++;
    } else {
      right++;
    }
  }

  if (left === string1.length) {
    return true;
  }

  return false;
}
