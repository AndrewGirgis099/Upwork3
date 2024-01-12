let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let dropDown = document.getElementById("dropdown");
console.log(btn1);
console.log(btn2);

btn1.addEventListener("click", ()=>{
    btn2.classList.remove("d-none")
    btn1.classList.add("d-none")
    dropDown.classList.remove("d-none");
    dropDown.classList.remove("animate__fadeOutUp");

    dropDown.classList.add("animate__fadeInDown");
})

btn2.addEventListener("click", ()=>{
    dropDown.classList.remove("animate__fadeInDown");

    btn1.classList.remove("d-none" )
    btn2.classList.add("d-none");
    dropDown.classList.add("animate__fadeOutUp");
    dropDown.classList.add("d-none");

})