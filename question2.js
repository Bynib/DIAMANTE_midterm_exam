//creating js function for calculating array sum
function sumArray(arr){
    return arr.reduce((a, b) => a + b, 0); //using reduce method
}

//testing the function if it works 
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //should output 55 in console