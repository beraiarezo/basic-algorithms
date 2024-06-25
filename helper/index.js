const generateUniqueRandomArray = (length, min, max) => {
  if (max - min + 1 < length)
    throw new Error(
      "Range is too small to generate the required number of unique numbers."
    );

  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1));
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
};

module.exports = generateUniqueRandomArray;
