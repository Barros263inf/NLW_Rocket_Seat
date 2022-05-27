
function menu(value) {
    if(value == "on"){
        menu_exp.classList.remove("menu_off");
        menu_exp.classList.add("menu_on");
    }
    else if(value == "off"){
        menu_exp.classList.remove("menu_on");
        menu_exp.classList.add("menu_off");
    }

    /*3ª Solution
    menu_exp.classList.add("menu_on")
    /*
    2ª Solution
    const menu = document.getElementById("menu_exp");
    menu.classList.toggle("menu_on"
    )*/
    /*
    1ª Solution
    if (menu_exp.classList.contains("menu_off")) {

        menu_exp.classList.remove("menu_off");
        menu_exp.classList.add("menu_on");
    }
    else {

        menu_exp.classList.remove("menu_on");
        menu_exp.classList.add("menu_off");
    }*/
}

//Function Menu Bar Scroll
window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        menu_bar.classList.add("scroll");
    }
    else{
        menu_bar.classList.remove("scroll");
    }
})

//Function Button Arrow Up Opacity
window.addEventListener("scroll", () => {
    if (window.pageYOffset < 1080) {
        arrow_top.style.display = "none";
    } else {
        arrow_top.style.display = "block";
    }
})

//Function Button Arrow Up
arrow_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Function Scroll Reveal
ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 1000,
}).reveal(`
#home, #home img, #home #statistics, 
#services, #services li, 
#about , #about header, #about p, #about img ,
#contact ,#contact header,  #contact p, #contact img,
#footer`);