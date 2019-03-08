// todo: taskArray가 배열 또는 객체로 input
// todo: resultArray가 taskArray의 타입과 같아야 됨

export function waterfall(taskArray, callback) {

  "use strict";

  var error = null
  var argumentsArray = []

  taskArray[0](function(err) {
    for(var i = 1; i < arguments.length; i++) argumentsArray.push(arguments[i])

    taskArray[1](argumentsArray[0], argumentsArray[1], function(err) {
      argumentsArray = []
      for(var i = 1; i < arguments.length; i++) argumentsArray.push(arguments[i])

      taskArray[2](argumentsArray[0], argumentsArray[1], function(err) {
        argumentsArray = []
        for(var i = 1; i < arguments.length; i++) argumentsArray.push(arguments[i])

        callback(error, argumentsArray)
      })
    })
  })
}