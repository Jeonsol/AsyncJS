export function every(arr, iterator, callback) {
  var error = null
  var flag

  for (var i = 0; i < arr.length; i++) {
    iterator(arr[i], function(err, result) {
      if(err) {
        error = err
      } else if(!result) {
        flag = result
      }
    })

    if(error) break // 확인 필요

  }

  (flag === false || error) ? callback(error, flag) : callback(error, true)
}