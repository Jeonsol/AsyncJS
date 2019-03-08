// todo: taskArray가 배열 또는 객체로 input
// todo: resultArray가 taskArray의 타입과 같아야 됨

export function series(taskArray, callback) {
  var error = null
  var resultArray = []
  var index = 0


  function getResult(i, callbackFunc) {
    if(error) return
    taskArray[i](function(err, result) {
      callbackFunc(err, result)
    })
  }
  function callbackFunc(err, result) {
    if(err) error = err
    resultArray.push(result)

    if(err || (!error && (taskArray.length === resultArray.length))) callback(err, resultArray)

    index = index < taskArray.length - 1 ? index + 1 : null

    if(index) getResult(index, callbackFunc)
  }
  getResult(index, callbackFunc)
}