// todo: taskArray가 배열 또는 객체로 input
// todo: resultArray가 taskArray의 타입과 같아야 됨

export function waterfall(taskArray, callback) {

  var error = null
  var resultArgumentsArray = []
  var index = 0

  function getResult(i, argumentsArray, callbackFunc) {
    if(error) return

    argumentsArray.push(callbackFunc)
    taskArray[i].apply(null, argumentsArray)
  }
  function callbackFunc(err) {
    if(err) error = err

    if(err || (!error && (index === taskArray.length - 1))) {
      resultArgumentsArray.pop()
      callback(err, resultArgumentsArray)
    }

    index = index < taskArray.length - 1 ? index + 1 : null

    resultArgumentsArray = []

    if(index) {
      for(var i = 1; i < arguments.length; i++) resultArgumentsArray.push(arguments[i])

      getResult(index, resultArgumentsArray, callbackFunc)
    }
  }
  getResult(index, resultArgumentsArray, callbackFunc)
}