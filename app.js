const burguer=document.getElementById("burguer")
const main=document.querySelector("main")
const boton=document.getElementById("boton")
const barra=document.querySelector(".header__barra")
const menu=document.querySelector(".menu")

burguer.addEventListener("click",(e)=>{
e.target.classList.toggle("now")
barra.classList.toggle("now")
menu.classList.toggle("now")

})