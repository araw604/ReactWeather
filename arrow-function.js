var names = ['araw', 'potty', 'jannet'];
//
// names.forEach(function(name){
//     console.log('forEach', name);
//
// });
//
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
//
// names.forEach((name)=> console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));


// var person ={
//   name: 'Araw',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + 'say hi to '+ name)
//     });
//   }
// };
//
// person.greet();


function add (a,b){
  return a+b;
}
//statement

var addStatement = (a,b) => {
  return a+b;
}

console.log(addStatement(4,7));


//Expression

var addExpression = (a,b) => a+b;
console.log(addExpression(3, -2)); 
// console.log(add(1,3));
// console.log(add(9, 0));
