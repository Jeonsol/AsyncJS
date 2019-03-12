export function every(arr, iterator, callback) {
  var error = null
  var flag
  var loopIndex = 0

  function getResult(callbackFunc) {
    for (var i = 0; i < arr.length; i++) {
      iterator(arr[i], function(err, result) {
        callbackFunc(err, result)
      })
      if(error) break // 확인 필요
    }
  }

  getResult(function(err, result) {
    loopIndex++
    if(err) {
      error = err
    } else if(!result) {
      flag = result
    }
    if(loopIndex === arr.length) {
      (flag === false || error) ? callback(error, flag) : callback(error, true)
    } else if(error) {
      callback(error, flag)
    }
  })
}