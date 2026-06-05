var x=document.querySelector("#num1")
var y=document.querySelector("#num2")
var add=document.querySelector("#add")
var subtract=document.querySelector("#subtract")
var multiply=document.querySelector("#multiply")
var divide=document.querySelector("#divide")
var result=document.querySelector("#result")
add.addEventListener("click",function(){
    result.innerHTML=Number(x.value)+Number(y.value)
})
subtract.addEventListener("click",function(){
    result.innerHTML=Number(x.value)-Number(y.value)
})
multiply.addEventListener("click",function(){
    result.innerHTML=Number(x.value)*Number(y.value)
})
divide.addEventListener("click",function(){
    result.innerHTML=Number(x.value)/Number(y.value)
})