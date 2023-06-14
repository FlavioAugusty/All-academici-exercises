var input = require("fs").readFileSync(0 , "utf8");
var num = parseInt(input);

fib = (n) => {
    if(n == 0 || n == 1){
        return 1;
    }else{
        return fib(n - 1)+ fib(n - 2);
    }
};

num = fib(num);

console.log(num);