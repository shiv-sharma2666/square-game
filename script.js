let a=document.querySelector("#ele1")
a.addEventListener("mouseenter",function(){
    let rand=Math.floor(Math.random()*100);
    a.innerHTML=rand;
})
let b=document.getElementById("ele2");
b.addEventListener("mouseenter",function(){
    b.style.backgroundColor="green";

})
b.addEventListener("mouseleave",function(){
    b.style.backgroundColor="red";

})
let c=document.getElementById("ele3");
c.addEventListener("mouseenter",function(){
    let rand1=Math.floor(Math.random()*256);
    let rand2=Math.floor(Math.random()*256);
    let rand3=Math.floor(Math.random()*256);
    c.style.backgroundColor=`rgb(${rand1},${rand2},${rand3})`;
})
c.addEventListener("mouseleave",function(){
    c.style.backgroundColor="white";

})
let d=document.getElementById("ele4");
d.addEventListener("click",function(){
    let r=Math.floor(Math.random()*256);
    c.style.backgroundColor=`rgb(${r},${0},${230})`;
})
d.addEventListener("click",function(){
    let r=Math.floor(Math.random()*256);
    b.style.backgroundColor=`rgb(${0},${250},${r})`;
})
d.addEventListener("dblclick",function(){
    c.style.backgroundColor=`white`;
    b.style.backgroundColor=`white`;
})