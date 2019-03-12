export function filter(arr, iterator, callback) {
  var error = null
  var computedArray = new Array(arr.length)
  var resultArray = []
  var loopIndex = 0

  function getResult(callbackFunc) {
    for (var i = 0; i < arr.length; i++) {
      (function (index) {
        iterator(arr[index], function (err, result) {
          callbackFunc(err, result, index)
        })
      })(i)
    }
  }

  getResult(function (err, result, index) {
    loopIndex++

    if (err) {
      error = err
    } else if (result) {
      computedArray[index] = arr[index]
    }

    if (loopIndex === arr.length) {
      for (var i = 0; i < computedArray.length; i++) {
        if (computedArray[i]) {
          resultArray.push(computedArray[i]);
        }
      }
      (error) ? callback(error, undefined) : callback(error, resultArray)
    }
  })
}