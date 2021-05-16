function quickSort (arr) {
  if(arr.length <= 1) return arr

  let pivotIndex = Math.floor(arr.length/2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  let left = []
  let right = []

  for(let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)]

}

const arr = [3, 8, 7, 6, 54, 108, 32, 11]

let sortArr = quickSort(arr)

console.log(sortArr)