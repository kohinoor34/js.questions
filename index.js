// let x = 1;

// if(function f(){}){
//     x+= typeof f
// }
// console.log(x);


const arr = [1,2,3,4,5]
for(var i = 0; i<arr.length;i++){
    setTimeout(() => {
        console.log(i);
        
    }, 1000);
}