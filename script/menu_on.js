function menu_on(){
    const menu = document.getElementById("menu_barra");
    if(scrollY >= 50){
        menu.classList.add("scroll");
    }
    else{
        menu.classList.remove("scroll");
    }
}