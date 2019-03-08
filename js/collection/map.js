export function map(arr, iterator, callback) {
  var resultArray = []
  var error = null
  for(var i = 0; i < arr.length; i++) {
    iterator(arr[i], function (err, result){
      error = err
      resultArray.push(result)
    })
  }
  callback(error, resultArray)
}
