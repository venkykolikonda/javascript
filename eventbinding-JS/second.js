var array=[50,80,90,70,60,85,120,97];
   var second=array.sort(function(a,b){
    return a-b ;
});
console.log(second);
console.log("second largest number is:"+array[1])