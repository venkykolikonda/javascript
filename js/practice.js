function prm(n){
var n ;
for(var i=0;i<n;i++){
    var count=0;
    for(var j=2;j<=i-1;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==0){
        console.log("prime numbers are"+i)
}
}
}
prm(10000);