// Hoisting:
//  2 types :1-Function Hoisting
//            mFunc()
//            function mFunc(){
//             var a = 10;
//             console.log(a)
//            }
// //   2-Variable Hoisting:
//       x=10;
//       console.log(x)
//       var x; 

    //   var let n const:
//  console.log("adsdffmng ")
//  console.log(b)
    //   let a= 10;
    //   var a =100;
    //   var a =10000
//     let a;
// const a;
// a=1000;

    // a=100;
    // const a =10;
    // a=100;
    // console.log(a)

    // closures:
//     function x(){
//         var a =10;
//     function y(){
//          console.log(a)
//         }
//   a=100 //a is pointing to 100
//   return y;
//     }
//    var z = x();
// //    console.log(z);
//    z();

//    function x(){


//     for(var i=1;i <=5; i++){
//         function close(i){
//         setTimeout(function () {
//          console.log(i)
//         },i*1000)
//     }
//     close (i);
//     }
//    }
//    x()

//    function outer(){
//    var count=10;
// return function inner(){
// count++;
// console.log(count)
// }

//    }
//  outer()()


// function counter(){
//     let a =10;
//     this.increement=function (){

//         a++;
//         console.log(a)
//            }
//     }


// const counter1 =new counter;
// counter1.increement();


// functions:
// function declaration or function statements:
// a();
// b();
// function a(){
//  console.log("hi")
// }
//  var b =function (){
//  console.log("bye")
// }

// callback functions:passing a function as a paramter to another function
//  passing a function as an argument to another function
// function x(y){
//  console.log('x')
//  y()
// }
// x(function y(){
//     console.log('y')

// })

// function callback(){
//     setTimeout(function xyz(){
//         console.log("callback")
//     },1000)
// }
// callback();

// setTimeout():

// console.log("start");

// setTimeout(()=>{
//     console.log('callback')
// },5000)

// console.log("end")



const p = new Promise(function (resolve,reject){
  resolve("promise is resolved!!")

    return p;
})

// function getData (){
//    p.then((res)=>console.log(res))
// }

// getData();

// async function getData (){
//  const data= await p;
//  console.log(data)
// }
// getData()
// const p1 =new Promise((resolve,rejected)=>{
//     setTimeout(()=>{

//         resolve("resolved value")
//     },10000)
// })
// const p2 =new Promise((resolve,rejected)=>{
//     setTimeout(()=>{

//         resolve("resolved value")
//     },5000)
// })




// async function handlePromise(){
//   const result1=await p1;
//   console.log("hello promise")
//   console.log(result1)
//      const result2 =await p2;
//   console.log("hello promise 2")
//   console.log(result2)
// }

// handlePromise()


// const API_URL ="https://api.github.com/user"

// async function handlePromise1(){
//     try{
// const data=await fetch(API_URL);
//   const jsonValue = await data.json()
// console.log(jsonValue)
//     }
//     catch(err){
//         console.log(err.message)
//     }
  
// }

// handlePromise1()


// const arr =[2,3,4,5,6];

// const arr1=arr.map((x)=>x * 2)
// const arr2 =arr.forEach((x)=>x * 2)

// console.log(arr1,arr2)


// const arr = [1,2,3,4,5];

// const result = arr.map((res)=>res + 2)
// console.log(result)

// const arr =[2,4,6,5,7];
// const res =arr.filter((x)=>x % 2 === 0)
// console.log(res)

// const arr = [5,2,1,3,6];

// const binary = arr.map((x)=>x.toString(2))
// console.log(binary)

const arr =[1,2,3,4,5]
// function sumValue(arr){
//     let sum =0;
//     for(let i =0 ;i<arr.length ;i++){
//    sum =sum + arr[i];
// }
// return sum;
// }

// console.log(sumValue(arr))


// const sumValue = arr.reduce((acc,curr)=>{
//     acc =acc + curr;
//     return acc;
// },0)

// console.log(sumValue)

// function findMax(arr){
//     let max =0;

//     for(let i =0 ;i < arr.length;i++){
//         if(arr[i] > max)
//         {
//            max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(findMax(arr))

// const red =arr.reduce((acc,max)=>{
//     if(acc >max){
//         max = acc;
//     }
//     return max
// },0)

// console.log(red)

// let num = 123456;
// let rev =0;
// let lastDigit ;

// while(num !=0 ){
//     lastDigit =num %10;
//     console.log(lastDigit)
//     rev =rev*10 + lastDigit;
//     num = Math.floor(num /10);
//     console.log(num)

// }
// console.log("reverseNumber is",rev)

// reverse a number with inbuild function


// const num = 123456;
// const rev =(num)=>parseInt(String(num).split('').reverse().join(' '));
// console.log(reverse(num))


// const arr1 =[1,2,3,2,3,2,3];
// const result = [...new Set(arr1)]
// console.log(result)


// call method-invokes a func and pass the arguments one by one

// let person ={
//     firstName:"Arshiya",
//     lastName:"Tabassum",
   
// }

//   let printFullName = function (hometown,state){
//         console.log(this.firstName + " " + this.lastName + " "+ hometown + " "+state)
//     }

//     let person1 ={
//         firstName:"Aalim",
//         lastName:"Mohammed",
//     }
//     //function borrowing
// // printFullName.call(person)
// printFullName.call(person1,"shimoga","karnataka")//first argument is always the reference to the this variable
// printFullName.apply(person,["uk","karnataka"])
// let printFullNameBind =printFullName.bind(person,"mumbai","india")//they take the copy of the function
// printFullNameBind()


// let name1 ={
//     firstName:"Mohsin",
//     lastName:"Mohammed",
//     }

//     let printFirst =function (hometown ,state){
//         console.log(this.firstName + "," + this.lastName + "," + hometown + " " +state)
//     }

//     let printbind=printFirst.bind(name1,"mumbai")
//     printbind("maharashta");

    // Function.prototype.mybind =function (...args){
    //     // this==>obj
    //     let obj =this;
    //     params =args.slice(1)//it removes the first element from the list n returns us all the elemtns
    //     return function (...args2){
    //         obj.apply(args[0] , [...params ,...args2])//it will concatinate both the arrays n pass to the apply method
    //     }
    // }

    // let printbind2 =printFirst.bind(name1 ,"shimoga")
    // printbind2("karnataka")

    // let person1= {
    //     name:"Arshi"
    // }

    // let person2 ={
    //     name:"Izhan"
    // }

    // let printPersons = function (age ,place ,food){
    //     console.log(`${this.name} my ${age} birth place ${place} favourit ${food}`)
    // }

    // // printPersons.call(person1, 25 ,"bengaluru")
    // printPersons.apply(person1,[ 25 ,"bengaluru"])


//     Function.prototype.mycall = function (...args){//...args ->rest parameter
//       let obj = this;
//       params =args.slice(1)
//       return function (...args2){
//       obj.call(args[0] ,[...params , ...args2]) 
//       }
//     }

//   let printAll=  printPersons.mycall(person1 ,35)
//   printAll()

// Function.prototype.mycall =function (obj = {}, ...args){
//     if(typeof this !== "function")
//         throw new Error("not callable")
// obj.fn =this;
// obj.fn(...args);//simply calling that function
// }
// printPersons.mycall(person1 ,[25 ,"Bengaluru"])

//apply-
// Function.prototype.myapply = function (obj ={},...args){
//     if(typeof this !== "function") throw new Error("not callable")
//     if(!Array.isArray(...args)){
//         throw new Error("not a apply method")
//     }
//  obj.fn =this;
//  obj.fn(...args)

// }
// printPersons.myapply(person1,23 ,"Bengalore" )


//bind:

// let printbi =printPersons.bind(person1,25);
// printbi("shimoga")

// Function.prototype.mybind =function (obj ={},...args1){
// obj.fn = this;

// return function (...args2){
//     obj.fn(...args1 ,...args2)
// }
// }

// let printbi =printPersons.mybind(person1, 45 ,"biryani")
// printbi("goa")

//map:
const arr1 =[1,2,3,4,5]

// const res =arr1.map((el)=>el * 2)
// console.log(res)

//pollyfill for map method
//prototype property of array constructor accessible to array instances
// Array.prototype.myMap =function (cb){
//     const res =[];
//     for (let i = 0; i < this.length; i++) {
     
//         res.push(cb(this[i]))
//     }
//     return res
// }

// const res =arr1.myMap((el)=>el *3);
// console.log(res)


//pollyfill for forEach Method

// const arr2 =[1,2,3,4,5];
// arr2.forEach((el)=>console.log(el));

// Array.prototype.myforEach = function (cb){
//     console.log("this",this)
// for(let i= 0 ;i <arr2.length;i++){
//     cb(this[i])
// }
// }

// arr2.myforEach((el)=>console.log(el))


const arr3 =[1,2,3,4,5,6,7,8]
// const res = arr3.filter((el)=>el > 2)
// console.log(res)

// Array.prototype.myFilter =function (cb){
//     console.log(this)
//     const res =[];
//     for(let i = 0 ; i <this.length ;i++){
    
//         if(cb(this[i])){
//             res.push(this[i])
//         }
//     }
// return res;
// }


// const res =arr3.myFilter((el)=>el > 3)
// console.log(res)

// const res = arr3.reduce((acc,curr)=>{
// return acc =acc+curr;
// },0)
// console.log(res)

// Array.prototype.myReduce = function (cb,initialValue){
//   let acc = initialValue;
//       for(let i =0 ;i < this.length ; i++){
//       acc= acc ? cb(acc,(this[i]) ): this[i]
//     }
//   return acc;
// }

  

// const res =arr3.myReduce((acc,curr)=>{
// return acc =acc+curr;
// },0)
// console.log(res)


//Debuncing:
let count=0;
function getData(){
    //calls an API n gets the data
    console.log("Fetching data...." ,count++)
}
const debounce =(fn,d)=>{
    let timer;
return function (){
    let context=this;
    args =arguments;
    clearTimeout(timer);//stop calling the method
   timer= setTimeout(()=>{
        fn.apply(this,arguments)
    },d)
}
}
const betterFunction=debounce(getData,300)