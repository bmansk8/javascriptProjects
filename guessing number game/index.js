//create secret number
var secretNumber=4;

//ask user for guess
var guess= prompt('guess a number');
guess = Number(guess);

//check if guess is right
if(guess === secretNumber){
    alert('You got it right!');
}else if(guess > secretNumber){
    alert('wrong, to high.');
}else{
    alert('to low , guess again.');
}