let inp = prompt ("Enter your Name : ")
let data = document.getElementById("Name")
data.innerText = `Hi, ${inp}`;
let clo=document.getElementById("clc");
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    clo.innerText=time;
}
setInterval(clock,1000);
let bot= document.getElementById("btn");
// let bod = document.getElementsByTagName("body");
// console.log(bod.item);
bot.onclick =() => {
        document.body.classList.toggle("dark");
        if (document.body.className=="dark"){
            bot.innerText= "click to light mode"
        }else{
            bot.innerText="clock to dark mode"
        }
//     document.body.style.backgroundColor = "grey";
//     document.body.style.color = "white";
 }