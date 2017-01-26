/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var min = 0;
  var max = array.length - 1;
  var  mid = Math.floor((min + max) / 2);
  while (min <= max) {
    if (array[mid] < target) {
      min = mid + 1;
    } else if (array[mid] > target) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};


