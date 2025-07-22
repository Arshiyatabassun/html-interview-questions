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


