const data = document.getElementById('bo1');
console.log (data);
let arr=['red','blue','green','yellow','wheat'];
var i=0;
function cal(){
    data.style.backgroundColor = arr[i];
    i=(i+1)%5;
}
// setInterval(col,6000)
// function bgchange() {
//     setTimeout(() =>{
//         arr.forEach(colour => {
//             data.style.backgroundColor = colour;
//     },1000);
// }
// )
// }
setInterval (cal,1000);

// setInterval(bgchange(),6000);