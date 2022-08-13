let array = [0,13,5,-4,6]
console.log(array)
for(let i in array){
    if(array[i]===0){
        continue
    }
    if(array[i]<0){
        array[i] = array[i]*array[i]
        continue
    }
    if(array[i]%2===0){
        array[i] = array[i]+1
        continue
    }
    if(array[i]%2!=0){
        array[i] = array[i]+2
    }
    
   
    
}

console.log(array)
