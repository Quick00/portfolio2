
open = false;
function MenuOpen(){

        document.getElementById("invisible").style.height = "175px";
        document.getElementById("openbtn").style.opacity = 0;
        document.getElementById("closebtn").style.opacity = 1;




}

function CloseBtn() {

    document.getElementById("invisible").style.height = "0px";
    document.getElementById("openbtn").style.opacity = 1;
    document.getElementById("closebtn").style.opacity = 0;
}