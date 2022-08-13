
function pyramid(rows){
    let alphabet = ""
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < i; j++) {
            alphabet += String.fromCharCode(j + 68);
        }
        alphabet += "\n";
    }
console.log("Pyramid")
    console.log(alphabet);
       
}

pyramid(5)