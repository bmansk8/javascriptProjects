//print reverse
function printReverse(arr){
    for (let index = arr.length; index >= 0; index--) {
        console.log(arr[index]);
    }
}

var array = [1,2,3,4,5];
console.log('reversed array');
console.log(printReverse(array));



//check if array is uniform
var arrayTwo = [1,1,1];
var arrayThree = ['a','a','a'];
var arrayFour = ['a','b','c']

function isUniform(array) {
    for (let index = 1; index < array.length; index++) {
        if(array[index] !== array[0]){
            return false;
        }
    }
    return true;
}

console.log('is array uniform?');
console.log(isUniform(array));
console.log(isUniform(arrayTwo));
console.log(isUniform(arrayThree));
console.log(isUniform(arrayFour));


//sum of array
function sumArray(array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

console.log('sum of arrays');
console.log(sumArray(array));
console.log(sumArray(arrayTwo));


//largest number in array
function max(array) {
    var max  = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] > max){
            max = array[index];
        }
    }
    return max;
}

arrayTwo = [1,15,6,25,24];

console.log('max numbers');
console.log(max(array));
console.log(max(arrayTwo));