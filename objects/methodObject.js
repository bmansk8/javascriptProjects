//method in a obj
var obj ={
    name:'chuck',
    age:45,
    isCool:false,
    friends: ['bob','tina'],
    add: function(x,y){
        return x + y;
    }
}

console.log(obj.add(5,7));



//namespacing example
var dog ={
    speak:function(){
        return 'woof';
    }
}

var cat={
    speak:function(){
        return 'meow';
    }
}

console.log(cat.speak());
console.log(dog.speak());



//keyword this
var comments={};
comments.data=['hi','hello','great post!'];
comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}

console.log(comments.print());