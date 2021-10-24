var color=window.localStorage.getItem('col');
window.onload=function (){
    if(color!=undefined){
        document.getElementsByTagName("BODY")[0].style.backgroundColor=color; 
        button(color);
        // This change the BACKGROUND color to black if it is white and keep the color name in variable.
    }
    if(color=='black'){
        document.getElementsByTagName("BODY")[0].style.color='white';
    }
}

function changeBackground(){
    window.localStorage.removeItem('col');

    let para=document.querySelector('body');
    let compstyle=window.getComputedStyle(para);
    let colorback=compstyle.getPropertyValue('background-color').toString();
    console.log(color);
    if (colorback=='rgb(255, 255, 255)'){
        document.getElementsByTagName("BODY")[0].style.backgroundColor='black'; // This change the BACKGROUND color to black if it is white and keep the color name in variable.
        window.localStorage.setItem('col','black');
        button('black');

    }else if(colorback=='rgb(0, 0, 0)'){
        document.getElementsByTagName("BODY")[0].style.backgroundColor='white'; // This change the BACKGROUND color to black if it is white and keep the color name in variable.
        window.localStorage.setItem('col','white')
        button('white');
    }else{
        document.write(colorback);
    }
}

function button(strin){
    if (strin=='white'){
        document.getElementsByClassName("color-css")[0].style.backgroundColor="black"; // This changes the color of the button's background, it became black if this statement is not run at first .
        document.getElementsByClassName("color-css")[0].style.color="white"; // This changes the color of button's font to black. 
        document.getElementById("color-id").textContent="black";
        
    }else if(strin=='black'){
        document.getElementsByClassName("color-css")[0].style.backgroundColor="white"; // This changes the color of the button's background, it became black if this statement is not run at first .
        document.getElementsByClassName("color-css")[0].style.color="black"; // This changes the color of button's font to black. 
        document.getElementById("color-id").textContent="white";
    }
}
/*
function setFontsAndBackground(){
    i
}


function setBackground(col){
    console.log(col);
    if(col!=undefined){
        var a=document.getElementsByTagName('body');
        a[0].style.backgroundColor=col;
    }
}
function changeBackground(){

    let para=document.querySelector('body');
    let compstyle=window.getComputedStyle(para);
    let colorback=compstyle.getPropertyValue('background-color').toString();
    
    if (colorback=="rgb(255, 255, 255)" || colorback=="rgba(0, 0, 0, 0)"){
        document.getElementsByTagName("BODY")[0].style.backgroundColor="black"; // This change the BACKGROUND color to black if it is white and keep the color name in variable.
        window.localStorage.setItem('col',"black");
        document.getElementsByClassName("color-css")[0].style.backgroundColor="white"; // This changes the color of the button's background, it became black if this statement is not run at first .
        document.getElementsByClassName("color-css")[0].style.color="black"; // This changes the color of button's font to black. 
        document.getElementById("color-id").textContent="white";
        document.getElementsByTagName("img")[0].style.color="white"
    }
    else {
        document.getElementsByTagName("BODY")[0].style.backgroundColor="white";
        window.localStorage.setItem('col',"white");
        document.getElementsByClassName("color-css")[0].style.backgroundColor="black";
        document.getElementsByClassName("color-css")[0].style.color="white";
        document.getElementById("color-id").textContent="black";
        document.getElementsByTagName("img")[0].style.color="black";
    }
}
*/