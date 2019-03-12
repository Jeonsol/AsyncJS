// todo: taskArray가 배열 또는 객체로 input
// todo: resultArray가 taskArray의 타입과 같아야 됨

export function parallel(taskArray, callback) {
  var error = null
  var resultArray = new Array(taskArray.length)
  var loopIndex = 0

  function getResult(callbackFunc) {
    for (var i = 0; i < taskArray.length; i++) {
      (function(index) {
        taskArray[index](function (err, result) {
          callbackFunc(err, result, index)
        })
      })(i)
    }
  }

  getResult(function(err, result, index) {
    loopIndex++

    if(err) error = err
    resultArray[index] = result

    if(err || (!error && (taskArray.length === loopIndex))) callback(err, resultArray)

  })

}