let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let btn6=document.getElementById("btn6")
let btn7=document.getElementById("btn7")
let btn8=document.getElementById("btn8")
let btn9=document.getElementById("btn9")
let btn0=document.getElementById("btn0")
let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let ad=document.getElementById("ad")
let sub=document.getElementById("sub")
let mul=document.getElementById("mul")
let div=document.getElementById("div")
let btn00=document.getElementById("btn00")
let dot=document.getElementById("dot")
let eq=document.getElementById("eq")



btn1.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="1"
})
btn2.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="2"
})
btn3.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="3"
})
btn4.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="4"
})
btn5.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="5"
})
btn6.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="6"
})
btn7.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="7"
})
btn8.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="8"
})
btn9.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="9"
})
btn0.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="0"
})

ad.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="+"
})
sub.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="-"
})
mul.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="*"
})
div.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="/"
})
dot.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="."
})

btn00.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText +="00"
})
b1.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText =""
})
b2.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText =op.innerText.toString().slice(0,-1)
})
eq.addEventListener( "click", () =>{
    let op=document.getElementById("op")
    op.innerText = eval(op.innerText)
})