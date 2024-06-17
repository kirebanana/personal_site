let flag1=0, flag2=0;
function popupLeft(){
    const popup = document.getElementById("leftPopup");
    if(flag1==0){
        popup.style.visibility = "hidden";
        flag1 = 1;
    }
    else{
        popup.style.visibility="visible"
        flag1=0;
    }
}

function popupRight(){
    const popup = document.getElementById("rightPopup");
    if(flag2==0){
        popup.style.visibility = "hidden";
        flag2 = 1;
    }
    else{
        popup.style.visibility="visible"
        flag2=0;
    }
}
