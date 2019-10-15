var p = document.querySelector("p");
p.classList.add("big");

// p.classList.remove('big');
// p.classList.toggle('big');
// small note. classList is not a array so no .push for example

//if you want to do a single property p.style.color or something else is ok

p = document.getElementsByTagName("p")[0];
console.log(p.textContent);
console.log(p.innerHTML);

var ul = document.querySelector("ul");
console.log(ul.textContent);
console.log(ul.innerHTML);
//inner html renders tags textContent does not

/* ul.addEventListener('click', () =>{
  console.log('u clicked the ul');
}); */

var li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    this.style.color = "pink";
  });
}

/* 
 note this* keyword does not work with es6 notation
 aka () => {}
 function() {} must be used instead

 both of these links go into detail

 https://stackoverflow.com/questions/55175428/the-this-keyword-not-working-with-arrow-functions
 
 https://stackoverflow.com/questions/28371982/what-does-this-refer-to-in-arrow-functions-in-es6

 this link also goes into detail why li[i] cannot be used when doing it function(){} way

 https://www.youtube.com/watch?v=mILVrW1GDfI&feature=youtu.be
*/

document.querySelector("h1").textContent = "changed the title";
var h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.style.background = "orange";
});

var img1 = document.getElementsByTagName("img")[0];
console.log(img1.getAttribute("src"));

img1.setAttribute(
  "src",
  "https://www.stockvault.net/data/2012/06/19/131801/thumb16.jpg"
);

var a = document.querySelector("a");
a.setAttribute("href", "http://yougotpranked.com");
