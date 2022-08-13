function prime(){
    var num =100
       var isPrime;
    for(var i=2;i<=num;i++){
        isPrime =1;
        for(var j=2;j<=i/2;j++){
            if(i%j==0){
                isPrime= 0;
                break;
            }
        }
       
        if(isPrime ==1){
          
            console.log(i + "\t")
        }

    }
}
console.log("Prime Numbers")
prime()