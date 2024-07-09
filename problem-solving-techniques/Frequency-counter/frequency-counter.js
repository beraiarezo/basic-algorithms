/**
 * SameFrequency receives two positive integers and determines if the two numbers have the same frequency of digits.
 * @param {number} num1 - The first positive integer
 * @param {number} num2 - The second positive integer
 * @returns {boolean} - Returns true if the two numbers have the same frequency of digits, otherwise false.
 */

function SameFrequency(num1, num2) {
  let strNum1 = num1.toString(),
    strNum2 = num2.toString(),
    frequences1 = {},
    frequences2 = {};

  if (strNum1.length !== strNum2.length) return false;

  for (let i = 0; i < strNum1.length; i++) {
    frequences1[strNum1[i]] = (frequences1[strNum1[i]] || 0) + 1;
  }

  for (let i = 0; i < strNum2.length; i++) {
    frequences2[strNum2[i]] = (frequences2[strNum2[i]] || 0) + 1;
  }

  for (let key in frequences1) {
    if (frequences1[key] !== frequences2[key]) {
      return false;
    }
  }

  return true;
}

/**
 * AreThereDuplicates accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.
 * It uses frequency counter patterns to achieve this.
 * @param  {...any} args - A variable number of arguments.
 * @returns {boolean} - Returns true if there are duplicates and false if there are not.
 */

function AreThereDuplicates() {
  let collection = {};
  for (let i = 0; i < arguments.length; i++) {
    if (collection[arguments[i]] !== undefined) {
      return true;
    }

    collection[arguments[i]] = 0;
  }

  return false;
}

/**
 * Linear Solution
 */

function AreThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
