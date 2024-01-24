// The array must be sorted for binary search to work.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, element) {
  let start = 0;
  let end = array.length -1; 
  console.log(end)

  while (start <= end) {
    console.log(start, 'start', end)
    let mid = Math.floor((start + end) / 2); // finding avgerage, the middle
    console.log(mid,'mid')

    if (array[mid] === element) {
      // We must return true once we have found the element being searched for.
      return console.log(true);
    } else if (array[mid] < element) {
      start = mid + 1;
      console.log('kk')
    } else {
      end = mid - 1;
      console.log('ll')
    }
  }
  // If we do not find the element we need to return false.
  return false;
}

console.log(binarySearch(arr, 7));