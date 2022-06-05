window.addEventListener("scroll", on_scroll)

on_scroll();

function on_scroll(){
    menubar_active_on_scroll();
    show_arrow_button_on_scroll();
    active_menu_at_current_section_on_scroll(home);
    active_menu_at_current_section_on_scroll(services);
    active_menu_at_current_section_on_scroll(about);
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

function active_menu_at_current_section_on_scroll(current_section) {

    const target_line = scrollY + innerHeight / 2;
    
    const section_id = current_section.getAttribute("id")
    const section_top = current_section.offsetTop;
    const section_height = current_section.offsetHeight;
    const section_end = section_top + section_height;

    const menu_element = document.querySelector(`.links li a[href*=${section_id}]`);

    
    if(section_top <= target_line && section_end >= target_line){
        menu_element.classList.add("on");
    }
    else{
        menu_element.classList.remove("on");

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
    /*2ª Solution
    const menu = document.getElementById("menu_exp");
    menu.classList.toggle("menu_on"
    )*/

    /*3ª Solution
    if (menu_exp.classList.contains("menu_off")) {
        menu_exp.classList.remove("menu_off");
        menu_exp.classList.add("menu_on");
    }
    else {
        menu_exp.classList.remove("menu_on");
        menu_exp.classList.add("menu_off");
    }
}*/
}

//Function Button Arrow Up
arrow_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

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