var fibonacci=[0,1]
var n;
function fibonaccinum(n){
    for(var i=1;i<n;i++){
        fibonacci.push(fibonacci[i]+fibonacci[i-1]);
    }
    console.log(fibonacci)
}
fibonaccinum(10)
fibonaccinum(50)