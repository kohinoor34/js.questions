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

let a = {
    x:1,
    y:2,
};
let b = {...a}
a.x = 5;
console.log(a);
console.log(b);


