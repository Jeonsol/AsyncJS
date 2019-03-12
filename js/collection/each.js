export function each(arr, iterator, callback) {
  var error = null
  var loopIndex = 0

  function getResult(callbackFunc) {
    for (var i = 0; i < arr.length; i++) {
      iterator(arr[i], function (err) {
        callbackFunc(err)
      })
    }
  }
  getResult(function(err) {
    loopIndex++
    if(err) {
      error = err
    }
    if(loopIndex === arr.length) {
      callback(error)
    }
  })

}