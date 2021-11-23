const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let num = 0

plus.onclick = function (){
    console.log(++num)
}

minus.onclick = function (){
    console.log(--num)
}