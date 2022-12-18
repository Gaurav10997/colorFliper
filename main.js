const btn = document.getElementById("btn")
const BG = document.getElementById("bg-c")
let arr  = ["red","yellow","green","purple","pink"]
btn.addEventListener("click",fun2)
console.log(Math.random())

function fun(){
    let random = Math.floor(Math.random()*arr.length)
    document.getElementById("new").style.backgroundColor=arr[random]
    BG.innerHTML="BackgroudColor: "+ arr[random]
}

let count = 0 ; 
function fun2(){
    
    document.getElementById("new").style.backgroundColor=arr[count%arr.length]
    count++;

}
