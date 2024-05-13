

// create animation sidemenu
let sideMenu1 = document.querySelector(".ofcanvas_opne");
let buttonsAll = document.querySelector(".menu_aliments li:nth-child(1)");
let buttonsAll1 = document.querySelector(".menu_aliments li:nth-child(2)");
let buttonsAll2 = document.querySelector(".menu_aliments li:nth-child(3)");
let buttonsAll3 = document.querySelector(".menu_aliments li:nth-child(4)");
let buttonsAll4 = document.querySelector(".menu_aliments li:nth-child(5)");
let buttonsAll5 = document.querySelector(".menu_aliments li:nth-child(6)");
let crooos = document.querySelector(".ofcanvas_close");

    sideMenu1.addEventListener("click" , function(){
        buttonsAll.style.animation = "myAnim3 1s ease 0s 1 normal forwards";
        buttonsAll1.style.animation = "myAnim3 1s ease 0.1s 1 normal forwards";
        buttonsAll2.style.animation = "myAnim3 1s ease 0.2s 1 normal forwards";
        buttonsAll3.style.animation = "myAnim3 1s ease 0.3s 1 normal forwards";
        buttonsAll4.style.animation = "myAnim3 1s ease 0.4s 1 normal forwards";
        buttonsAll5.style.animation = "myAnim3 1s ease 0.5s 1 normal forwards";

        
})
crooos.addEventListener("click" , function(){
    buttonsAll.style.animation = "";
    buttonsAll1.style.animation = "";
    buttonsAll2.style.animation = "";
    buttonsAll3.style.animation = "";
    buttonsAll4.style.animation = "";
    buttonsAll5.style.animation = "";

})
// end

$(document).ready(function(){
    

})





