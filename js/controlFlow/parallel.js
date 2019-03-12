// todo: taskArray가 배열 또는 객체로 input
// todo: resultArray가 taskArray의 타입과 같아야 됨
// todo: 결과값 저장되는 순서 보장해야됨

export function parallel(taskArray, callback) {
  var error = null
  var resultArray = []

  function getResult(callbackFunc) {
    for (var i = 0; i < taskArray.length; i++) {
      taskArray[i](function(err, result) {
        callbackFunc(err, result)
      })
    }
  }

  getResult(function(err, result) {
    if(err) error = err
    resultArray.push(result)

    if(err || (!error && (taskArray.length === resultArray.length))) callback(err, resultArray)

  })

}