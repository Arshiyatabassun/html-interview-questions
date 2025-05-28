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
    function x(){
        var a =10;
    function y(){
         console.log(a)
        }
  a=100 //a is pointing to 100
  return y;
    }
   var z = x();
//    console.log(z);
   z();