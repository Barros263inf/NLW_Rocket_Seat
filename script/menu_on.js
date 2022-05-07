
function menu_on(){
    if(scrollY > 0){
        menu_barra.classList.add("scroll");
    }
    else{
        menu_barra.classList.remove("scroll");
    }
}

function menu_show(){
    const menu = document.getElementById("menu_exp");
    menu.classList.toggle("menu_on")
    /*if(menu.classList.contains("menu_off")){
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