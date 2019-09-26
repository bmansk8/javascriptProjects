console.log('print all numbers between -10 and 19');
var number = -10;
while(number < 20){
    console.log(number);
    number++;
}

console.log('print all even numbers between 10 and 40');
number = 10;
while(number < 41){
    console.log(number);
    number+=2;
}

console.log('print all od numbers between 300 and 333');
number = 301;
while(number < 334){
    console.log(number);
    number+=2;
}

console.log('print all numbers divisible by 5 AND 3 between 5 and 50');
number = 5;
while(number < 51){
    if(number % 5 ===0 && number % 3 ===0){
        console.log(number);
    }
    number++;
}
