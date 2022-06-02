
window.addEventListener("scroll", on_scroll)

on_scroll()

function on_scroll() {
    menubar_active_on_scroll()
    show_arrow_button_on_scroll();
    active_menu_on_scroll_at_current_section(home)
}

function menubar_active_on_scroll() {
    if (scrollY > 0) {
        menu_bar.classList.add("scroll");
    }
    else {
        menu_bar.classList.remove("scroll");
    }
}

function show_arrow_button_on_scroll() {
    if (window.pageYOffset < 1080) {
        arrow_top.style.display = "none";
    } else {
        arrow_top.style.display = "block";
    }
}

function active_menu_on_scroll_at_current_section(section) {
    const target_line = scrollY + innerHeight / 2;

    let section_off = section.offsetTop;
    let section_height = section.offsetHeight;
    let section_ends_at = section_off + section_height;


    if (section_off <= target_line && target_line <= section_ends_at) {
        console.log("dentro");
        console.log(target_line);
        console.log(section_off);
        console.log(section_ends_at);
    }
    else {
        console.log("fora");
        console.log(target_line);
        console.log(section_off);
        console.log(section_ends_at);
    }
}

function menu(value) {
    if (value == "on") {
        menu_exp.classList.remove("menu_off");
        menu_exp.classList.add("menu_on");
    }
    else if (value == "off") {
        menu_exp.classList.remove("menu_on");
        menu_exp.classList.add("menu_off");
    }
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

//Function Menu Bar Scroll
/*
window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        menu_bar.classList.add("scroll");
    }
    else{
        menu_bar.classList.remove("scroll");
    }
})
*/

//Function Button Arrow Up Opacity
/*
window.addEventListener("scroll", () => {
    if (window.pageYOffset < 1080) {
        arrow_top.style.display = "none";
    } else {
        arrow_top.style.display = "block";
    }
})
*/

//Function Button Arrow Up
arrow_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})