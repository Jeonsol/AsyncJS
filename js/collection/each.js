export function each(arr, iterator, callback) {
  var error = null

  for (var i = 0; i < arr.length; i++) {
    iterator(arr[i], (e) => {
      if(e) {
        error = e
      }
    })

    if(error) break // 확인 필요

  }

  callback(error)

}