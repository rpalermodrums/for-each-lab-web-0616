function iterativeLog(array) {
  array.forEach((item, index) => {
    console.log(`${index}: ${item}`)
  })
}

function iterate(callback) {
  arr = ["hello", "goodbye"]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
