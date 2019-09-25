var userName = prompt('what is your name?');
var age = prompt('what is your age?');

age = Number(age);
//converts age from string into a number

alert('Nice to meet you, ' + userName);
console.log(userName);

if(age < 18){
    console.log('You are to young to enter the club.');
}else if(age < 21){
    if(age % 2 === 0){
        console.log('You are allowed to enter, but not drink.');
    }else{
        console.log('Your age is odd! You may enter, but not drink.');
    }   
}else if(age == 21){
    console.log('Happy 21st birthday! You may enter and drink.');
}else{
    if(age % 2 ===0){
        console.log('You may enter.');
    }else{
        console.log('Your age is odd! You may enter the club.');
    }
}