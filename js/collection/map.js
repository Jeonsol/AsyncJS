// todo: 결과값 저장되는 순서 보장해야됨

export function map(arr, iterator, callback) {
  var resultArray = new Array(arr.length)
  var error = null

  function getResult(callbackFunc) {
    for(var i = 0; i < arr.length; i++) {
      iterator(arr[i], function (err, result){
        callbackFunc(err, result)
      })
    }
  }
  getResult(function(err, result) {
    if(err) error = err
    resultArray[index] = result

    if(arr.length === resultArray.length) callback(error, resultArray)
  })
}
