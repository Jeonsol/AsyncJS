export function reduce(arr, init, iterator, callback) {
  var error = null
  var memo = init

  for (var i = 0; i < arr.length; i++) {
    iterator(memo, arr[i], function(err, result) {
      memo = result
      if(err) {
        error = err
      }
    })

    if(error) break // 확인 필요

  }
  callback(error, memo)
}