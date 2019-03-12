export function map(arr, iterator, callback) {
  var resultArray = new Array(arr.length)
  var error = null
  var loopIndex = 0

  function getResult(callbackFunc) {
    for(var i = 0; i < arr.length; i++) {
      (function(index) {
        iterator(arr[index], function (err, result){
          callbackFunc(err, result, index)
        })
      })(i)
    }
  }
  getResult(function(err, result, index) {
    loopIndex++

    if(err) error = err
    resultArray[index] = result
    if(arr.length === loopIndex) callback(error, resultArray)
  })
}
