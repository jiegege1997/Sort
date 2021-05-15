function BubbleSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++) {
      if(arr[j] < arr[j - 1]) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }

  return arr
}

const arr = [3, 8, 7, 6, 54, 108, 32, 11]

let sortArr = BubbleSort(arr)

console.log(sortArr)

