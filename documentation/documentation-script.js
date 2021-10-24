
function checker(iid){
    var about=document.getElementById("about");
    var registration=document.getElementById("registration");
    var login=document.getElementById("login");
    var getstarted=document.getElementById("getstarted");
    let dis=[about,registration,login,getstarted];
    let discp=['about','registration','login','getstarted'];
    for(var i=0;i<4;i++){
        if (iid==discp[i]){
            continue;
        }else{
            var compsytle=window.getComputedStyle(dis[i]);
            var status=compsytle.display;
            if (status=="block"){
                dis[i].style.display="none";
            }
        }
    }
}
function visible(iid){
    checker(iid);
    var e=document.getElementById(iid);
    var compsytle=window.getComputedStyle(e);
    var dis=compsytle.display;
    var info=document.getElementById('infopage');

    if(dis=="none"){
        e.style.display="block";
        info.style.display='none';

    }else{
        e.style.display="none";
        info.style.display='block';

    }
}
window.onload=function loadpage(){
    var info=document.getElementById('infopage');
    info.style.display='block';
}