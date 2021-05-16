function merge (left, right) {
  let arr = []
  while(left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())
  }
  return [...arr,...left,...right]
}

function mergeSort (arr) {
  if(arr.length === 1) return arr
  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

let arr = [32, 12, 56, 78, 76, 45, 36]
console.log(mergeSort(arr))