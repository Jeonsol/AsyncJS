import { each } from './collection/each.js'
import { every } from './collection/every.js'
import { filter } from './collection/filter.js'
import { reduce } from './collection/reduce.js'
import { map } from './collection/map.js'
import { parallel } from './controlFlow/parallel.js'
import { series } from './controlFlow/series.js'
import { waterfall } from './controlFlow/waterfall.js'

/**
 * each 예제
 */
function square(item, doneCallback){

  if(typeof item != "number"){

    doneCallback(new Error(item+' != number type'));

    return

  }

  console.log(item*item)

  doneCallback(null)

}

// 1,2,3,4가 순서대로 실행되는 것이 아니라 동시에 실행되서 콜백을 먼저 타는애가 먼저 출력된다.

// each([1,2,'b',4], square, function(err) {
//
//   // squre함수에 배열을 던져서 모든 작업이 끝날때 호출되는 Callback함수
//
//   if(err) console.log(err.message) // err.message는 덮어씌어짐
//
//   else console.log('Finish')
//
// })

/**
 * every 예제
 */

// every([4,2,8,16,19,20,44], function(number, callback) {
//   if(number % 2 === 0) {
//     callback(null, true);
//   } else {
//     callback(null, false);
//   }
// }, function(err, result) {
//   console.log(err, result)
// });

/**
 * filter 예제
 */

// filter([4,2,8,16,19,20,44], function(number, callback) {
//   if(number % 2 === 0) {
//     callback(null, true);
//   } else {
//     callback(null, false);
//   }
// }, function(err, result) {
//   console.log(err, result)
// });

/**
 * reduce 예제
 */
//
// reduce([1,2,3], 1, function(memo, item, callback) {
//   callback(null, memo * item)
// }, function(err, result) {
//   console.log(err,result)
// });

/**
 * map 예제
 */

// map함수는 배열객체의 원소에 대해 반복함수를 수행하고 마지막으로 배열 결과 객체를 얻을수 있음.
var arr  = [1,2,3,4,5];

map(arr,
  function(item, callback){
  setTimeout(function() {
    console.log("task" + item)
    callback(null, {'id':item,'uuid':[Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)]})
  }, 5000 - item*1000)
  // 배열의 1~5까지 id와 uuid를 발급하여 키밸류 생성하여 콜백함수의 result로 리턴
  },
  function(err,result){
    if(err) console.log(err);
    else console.log(result);
  }
);

/**
 * parallel 예제
 */

// parallel([
//     function task1(callback){
//       setTimeout(function(){
//         console.log("task1");
//         // 콜백 함수로 에러로그와 result인 "one"을 전달하면 콜백함수는 이를 배열에 저장한다.
//         callback(null, "one");
//       },1000);
//     },
//     function task2(callback){
//       setTimeout(function(){
//         console.log("task2");
//         // 콜백 함수로 에러로그와 result인 "one"을 전달하면 콜백함수는 이를 배열에 저장한다.
//         callback(null,"two");
//       }, 3000);
//     },
//     function task3(callback){
//       setTimeout(function(){
//         console.log("task3");
//         // 콜백 함수로 에러로그와 result인 "one"을 전달하면 콜백함수는 이를 배열에 저장한다.
//         callback(null, "three");
//       }, 2000);
//     }],
//   // Callback함수(기존 작업이 모두 종료되어야만 호출된다.)
//   function(err,results){
//     if(err){
//       return console.log(err);
//     }
//     console.log(results);
//   }
// );

/**
 * series 예제
 */

// series([
//     function task1(callback){
//       setTimeout(function(){
//         console.log("task1");
//         // 콜백 함수로 에러로그와 result인 "one"을 전달하면 콜백함수는 이를 배열에 저장한다.
//         callback(null, "one");
//       },1000);
//     },
//     function task2(callback){
//       setTimeout(function(){
//         console.log("task2");
//         // 콜백 함수로 에러로그와 result인 "one"을 전달하면 콜백함수는 이를 배열에 저장한다.
//         callback(null, "two");
//       }, 3000);
//     },
//     function task3(callback){
//       setTimeout(function(){
//         console.log("task3");
//         // 콜백 함수로 에러로그와 result인 "one"을 전달하면 콜백함수는 이를 배열에 저장한다.
//         callback(null, "three");
//       }, 2000);
//     }],
//   // Callback함수(기존 작업이 모두 종료되어야만 호출된다.)
//   function(err,results){
//     if(err){
//       return console.log(err);
//     }
//     console.log(results);
//   }
// );

/**
 * waterfall 예제
 */

// waterfall([
//     function task1(callback){
//       // 첫번째 작업 시작
//       setTimeout(function(){
//         console.log("task1");
//         // 에러가 없으므로 null과 두번째 작업함수에서 전달받을 매개변수 1,2를 함께 리턴
//         callback(null, 1, 2);
//       },1000);
//     },
//     function task2(arg1, arg2, callback){
//       // task1로부터 1,2를 전달받아 다시 덧셈과 곱셈을 하여 리턴
//       setTimeout(function(){
//         console.log("task2");
//         callback(null, arg1 + arg2, arg1 * arg2);
//       },3000);
//     },
//     function task3(arg1, arg2, callback){
//       // task2로부터 3,2를 전달받아 배열에 넣고 callback함수로 매개변수로 담아 리턴
//       setTimeout(function(){
//         console.log("task3");
//         var arr = [];
//         arr.push(arg1);
//         arr.push(arg2);
//         callback(null, arr);
//       },2000);
//     }
//   ],
//   function(err,result){
//     if(err){
//       return console.log(err);
//     }
//     // task3으로부터 2개 원소가 있는 배열을 전달받음
//     console.log(result);
//   }
// );

