var isOrange = false;
var button = document.querySelector('button');

/*
button.addEventListener('click', () => {
    console.log('button clicked');
    if(isOrange){
        document.body.style.background = 'white';
        isOrange = false;
    }else{
        document.body.style.background = 'orange';
        isOrange = true;
    }
    
});
*/

button.addEventListener('click', () => {
        document.body.classList.toggle('purple');
});