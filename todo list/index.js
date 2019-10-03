var todos =["buy new turtle"];

window.setTimeout(() => {
    
    var input = prompt('what would you like to do?');

    while(input !== 'quit'){
        //handle input
        if(input === "list"){
            console.log(todos);
        }else if (input === 'new'){
            var newTodo = prompt('enter new todo');
            todos.push(newTodo);
        }

        input = prompt('what would you like to do?');
        //ask again for new input
    }
    console.log('ok you have quit the app');

}, 500);