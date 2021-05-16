//遍历找到最小的放前面 也可以最大的往后面 

function selectSort (arr) {
  if(arr.length <= 1) return
  for(let i = 0; i < arr.length; i++) {
    let min = i
    for(let j = i ; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    if(arr[min] < arr[i]) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }

  return arr
}

const arr = [3, 8, 7, 6, 54, 108, 32, 11]

console.log(selectSort(arr))