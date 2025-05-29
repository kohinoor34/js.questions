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

// function executeFirstArgument(callback) {
//     if (arguments.length > 0 && typeof arguments[0] === 'function') {
//       arguments[0](); // Execute the first argument (which should be a function)
//     } else {
//       console.error("No function provided as the first argument!");
//     }
//   }

//   function sayHello() {
//     console.log("Hello!");
//   }

//   // Correct usage:
//   executeFirstArgument(sayHello); // This will print "Hello!"

//   // Incorrect usage:
//   executeFirstArgument(); // This will print "No function provided as the first argument!"
//   executeFirstArgument("not a function"); // This will print "No function provided as the first argument!"

// question asked in amazon interview

// let str = 'a.b.c.d.e'
// newstr = str.split(".")
// const obj = newstr.reduceRight(cb)

// function cb(acc,next){
// return{[next]:acc}
// }

// console.log(obj);

//object based question
// we have multiple student data the question os how to save it ,there is multiple way we can do this but
//we have to use less momory space

//option1

// student1 = {
//     name:'rajesh',
//     age:21,
//     grade:"A",
//  result:function(){
// console.log(this.grade);

//     }
// }

// student2 = {
//     name:'prathmesh',
//     age:20,
//     grade:"B",
//        result:function(){
// console.log(this.grade);

//     }
// }

// student3 = {
//     name:'aarjun',
//     age:35,
//     grade:"A",
//     result:function(){
// console.log(this.grade);

//     }
// }
// //
// console.log(student1);
// console.log(student2);
// console.log(student3);

//option2

function createobjects(studentname, studentage) {
  const obj = Object.create(studnttask)
  obj.name = studentname;
  obj.age = studentage;
return obj;   
}

const studnttask = {
    checkage :function(){
    if (this.age < 21) {
      console.log('yes',this);
    }
    else{
        console.log('no',this);
        
    }
}
}

let stu1 = createobjects("parth", 25);
let stu2 = createobjects("shikhar", 21);
let stu3 = createobjects("rohan", 20);
console.log(stu1.checkage());
console.log(stu2.checkage());
console.log(stu3.checkage());


//get currentyear

// const currentdate = new Date()
// console.log(currentdate.getFullYear());

// //concat two string

// let myname = 'kohinoor'
// let lastname = 'kamble'
// let getfullname = myname.concat(lastname)
// console.log(getfullname);



