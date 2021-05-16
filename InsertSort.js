//时间复杂度n^2
// 遍历，小的交换到前面 类似打牌
function InsertSort (arr) {
  if(arr.length <= 1) return

  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let j = i
    while (j > 0 && arr[j-1] > temp) {
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = temp
  }

  return arr
} 

const arr = [3, 8, 7, 6, 54, 108, 32, 11]

console.log(InsertSort(arr))