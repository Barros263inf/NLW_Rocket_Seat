
function header_background() {
    if (scrollY > 0) {
        menu_bar.classList.add("scroll");
    }
    else {
        menu_bar.classList.remove("scroll");
    }
}

function menu_show() {
    /*
    3ª Solution
    */
    menu_exp.classList.toggle("menu_on")
    /*
    2ª Solution
    const menu = document.getElementById("menu_exp");
    menu.classList.toggle("menu_on"
    )*/
    /*
    1ª Solution
    if(menu.classList.contains("menu_off")){
        alert(true)
        menu.classList.remove("menu_off");
        menu.classList.add("menu_on");
    }
    else{
        alert(false)
        menu.classList.remove("menu_on");
        menu.classList.add("menu_off");
    }*/
}