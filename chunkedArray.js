// Problem 1;
function chunkArray(arr, size) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  }
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const result = chunkArray(inputArray, chunkSize);
console.log(result);
// What is the use of slice here, how it works.
// 1. The slice() method returns selected elements in an array, as a new array.
// 2. The slice() method selects from a given start, up to a (not inclusive) given end.
// 3. The slice() method does not change the original array.
// 4. slice() method takes the two indexes, and return the new array which contains the elements of old array from first index to less than by 1 from last array.
// Suppose array is [1,2,3,4,5,6] then slice(1,4) return [2,3,4];


