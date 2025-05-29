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
a();
b();
function a(){
 console.log("hi")
}
 var b =function (){
 console.log("bye")
}



