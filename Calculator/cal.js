let num1 = 8
let num2 = 2
document.getElementById("no1").textContent += num1 
document.getElementById("no2").textContent += num2 
let ans = document.getElementById("ans")

function add(){
    let answer = num1 + num2
    ans.textContent = answer
}

function sub(){
    let answer = num1 - num2
    ans.textContent = answer
}

function mul(){
    let answer = num1 * num2
    ans.textContent = answer
}

function div(){
    let answer = num1 / num2
    ans.textContent = answer
}