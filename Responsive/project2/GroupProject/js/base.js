function displayMenu() {

    const nav = $("#linkMenu").css("display");  
    if (nav != "none") {
        $("#linkMenu").css("display","none");
    } else {
        $("#linkMenu").css("display","block");
    }
}

window.addEventListener("resize",()=>{
    if (window.innerWidth >= 670) {
        $("#linkMenu").removeAttr("style");
    }
})