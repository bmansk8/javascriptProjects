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

document.querySelector("h1").textContent = "changed the title";

var img1 = document.getElementsByTagName("img")[0];
console.log(img1.getAttribute("src"));

img1.setAttribute(
  "src",
  "https://www.stockvault.net/data/2012/06/19/131801/thumb16.jpg"
);

var a = document.querySelector("a");
a.setAttribute("href", "http://yougotpranked.com");
