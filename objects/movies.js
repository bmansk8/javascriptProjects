var movieArray = [
    {
        title:'Star Wars',
        seen:true,
        rating:5
    },
    {
        title:'The Dark Knight Rises',
        seen:true,
        rating:4.5
    },
    {
        title:'My Little Pony',
        seen:false,
        rating:2
    }
]



function printMovies(array) {

    for (let index = 0; index < array.length; index++) {
        if(movieArray[index].seen == true){
            console.log('You have watched ' + '"' + movieArray[index].title + '"' + ' - ' + movieArray[index].rating + ' stars')
        }else{
            console.log('You have not watched ' + '"' + movieArray[index].title + '"' + ' - ' + movieArray[index].rating + ' stars')
        }
    }
    
}

printMovies(movieArray);