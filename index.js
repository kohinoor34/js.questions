// let x = 1;

// if(function f(){}){
//     x+= typeof f
// }
// console.log(x);


// const arr = [1,2,3,4,5]
// for(var i = 0; i<arr.length;i++){
//     setTimeout(() => {
//         console.log(i);
        
//     }, 1000);
// }

//shallow copy
// let a = {
//     x:1,
//     y:2,
// };
// let b = a;
// a.x = 5;
// console.log(a);
// console.log(b);  //this concept is shallow coppy and we can create deep copy of next


//deep copy

// let a = {
//     x:1,
//     y:2,
// };
// let b = {...a}
// a.x = 5;
// console.log(a);
// console.log(b);



//hoisting 

//function parent(){
//     var count = 0;

//     return function(){
//         count++
//         console.log(count);
        
//     }
// }
//       let countvalue = parent()
//      countvalue()
//      countvalue()
//      countvalue()
//      countvalue()


// var lenght = 6;
// function fn() {
//     console.log(this.lenght);
// }

// obj = {
//     lenght:7,
//     methode:function(fn){
// arguments[0]()
//     }
// }
// obj.methode(fn,1)


function executeFirstArgument(callback) {
    if (arguments.length > 0 && typeof arguments[0] === 'function') {
      arguments[0](); // Execute the first argument (which should be a function)
    } else {
      console.error("No function provided as the first argument!");
    }
  }
  
  function sayHello() {
    console.log("Hello!");
  }
  
  // Correct usage:
  executeFirstArgument(sayHello); // This will print "Hello!"
  
  // Incorrect usage:
  executeFirstArgument(); // This will print "No function provided as the first argument!"
  executeFirstArgument("not a function"); // This will print "No function provided as the first argument!"



      
      
      


