function BinarySearch (arr ,target) {
  if(arr.length < 1) return -1
  let left = 0, right = arr.length - 1
  while(left <= right) {
    const mid = Math.floor( (left + right) / 2 )
    if(arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1 
    }
  }
  return -1
}

const arr = [1,3,5,7,9,11,16,18]

console.log(BinarySearch(arr, 11))
console.log(BinarySearch(arr, 8))