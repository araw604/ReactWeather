// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Cancun', function(err, temp){
//   if(err){
//     console.log('err', err);
//   }
//     else{
//       console.log('success', temp)
//     }
//
// });
//
//
// function getTemPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//
//   });
// }
//
// getTemPromise('Cancun').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//    console.log('promise err', err);
// })


function addPromise (a,b){
  return new Promise(function(resolve, reject){
    if(typeof a ==='number' && typeof b ==='number'){
      resolve(a+b);
    } else{
      reject('a & b need to be numbers');
    }
  });
}

addPromise(2,3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});


addPromise('abcd',9).then(function(sum){
  console.log('this should not show up', sum);
}, function(err){
  console.log('this should appear on the screen', err);

});
