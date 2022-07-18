if (! localStorage.noFirstVisit) {
    document.getElementById('cookies-prompt').style.display = 'flex';   
}
function setVisited(){
    localStorage.noFirstVisit = "1";
    document.getElementById('cookies-prompt').style.display = 'none'; 
}
function showMenu() {
    document.getElementById("menuIcon").style.display = "none";
    document.getElementById("menu-mobile").style.display = "flex";
    document.getElementById("menuHideIcon").style.display = "flex";
}
function hideMenu() {
    if (window.matchMedia('(max-width: 480px)').matches) {
        document.getElementById("menuIcon").style.display = "flex";
    }
    document.getElementById("menu-mobile").style.display = "none";
    document.getElementById("menuHideIcon").style.display = "none";
}

function scrollToElement(param) {
    const id = param;
    const yOffset = -130;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    hideMenu();
}
function scrollInsideCarous(param) {
    var topPos = document.getElementById(param).offsetLeft;

    document.getElementById('carousell').scrollTo({ left: topPos - 10, behavior: "smooth" });
}
function back(){
    history.back();
}