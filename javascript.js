Hoisting:
//  2 types :1-Function Hoisting
           mFunc()
           function mFunc(){
            var a = 10;
            console.log(a)
           }
//   2-Variable Hoisting:
      x=10;
      console.log(x)
      var x; 