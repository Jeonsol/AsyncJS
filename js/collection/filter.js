// todo: 결과값 저장되는 순서 보장해야됨

export function filter(arr, iterator, callback) {
  var error = null
  var resultArray = []

  for (var i = 0; i < arr.length; i++) {
    iterator(arr[i], function(err, result) {
      if(err) {
        error = err
      } else if(result) {
        resultArray.push(arr[i])
      }
    })

    if(error) break // 확인 필요

  }
  (error) ? callback(error, undefined) : callback(error, resultArray)
}