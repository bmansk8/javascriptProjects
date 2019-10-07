var todos =["buy new turtle"];

window.setTimeout(() => {
    
    var input = prompt('what would you like to do?');

    while(input !== 'quit'){
        //handle input
        if(input === "list"){
            listTodos();
        }else if (input === 'new'){
            addTodo();
        } else if (input === 'delete'){
            removeTodo();
        }

        input = prompt('what would you like to do?');
        //ask again for new input
    }
    console.log('ok you have quit the app');

    function listTodos(){
        console.log('*****');
        todos.forEach( function(todo, i){
            console.log(i +": "+todo);
        });
        console.log('*****');
    }

    function addTodo(){
        var newTodo = prompt('enter new todo');
        todos.push(newTodo);
        console.log('Added todo');
    }

    function removeTodo(){
        //ask for index to delete
        var index = prompt('Enter index to delete');
        //then delete
        todos.splice(index,1);
        console.log('Deleted todo');
    }

}, 500);