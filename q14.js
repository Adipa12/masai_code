// Create a function checkEvenNumber that takes a number and returns a Promise:
// If the number is even, resolve with: "<number> is even"
// If odd or not a number, reject with: "<number> is odd or invalid"

function checkEvenNumber(number){
    return new Promise((resolve, reject)=>{
        if(number % 2 == 0){
            resolve(`${number} is even`)            
        }
        else{
            reject(`${number} is odd or invalid`)           
        }
    });
}
checkEvenNumber(5).then(console.log).catch(console.error);