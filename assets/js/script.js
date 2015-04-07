var header, logo, yPos;
function yScroll() {
    header = document.getElementById('header');
    logo = document.getElementById('logo');
    link = document.getElementsByClassName("link");
    yPos = window.pageYOffset;
    if(yPos > 150) {
        header.style.height = "64px";
        header.style.paddingTop = "0px";
        header.style.backgroundColor = "white";
        logo.style.fontSize = "20px";
        for( var i = 0; i < link.length; i++) {
            link[i].style.fontSize = "10px";
        }
    } else {
        header.style.height="120px";
        header.style.paddingTop = "50px";
        header.style.backgroundColor = "rgba(255,255,255,.5)";
        logo.style.fontSize="35px";
        for( var i = 0; i < link.length; i++) {
            link[i].style.fontSize = "16px";
        }
    }
}
window.addEventListener("scroll", yScroll);