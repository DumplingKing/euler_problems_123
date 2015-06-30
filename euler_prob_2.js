var sum = 0
fib = function(numMax){
    for(i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        console.log(x);
        if (x%2 === 0) {
            sum += x;
        }
    }
}

fib(32)
console.log(sum);
