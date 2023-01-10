var contTrash = document.querySelectorAll(".container-trash");
var trashes = document.querySelectorAll(".trash");
var cont = document.querySelector(".container");

var eleGame = document.getElementById("game");
eleGame.style.width = "0px";
eleGame.style.height = "0px";

var eleUFO = document.getElementById("UFO");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
stopBtn.style.display ="none";
function onStart(){
	startBtn.style.display = "none";
    stopBtn.style.display ="";
	eleUFO.style.transition = "1s cubic-bezier(0,1.11,.68,1.18)";
    eleGame.style.width = "95vw";
    eleGame.style.height = "92vh";
    onRand();
}
function onStop(){
	startBtn.style.display = "";
    stopBtn.style.display ="none";
    eleUFO.style.transform = "translate(85vw,50px)";
    eleUFO.style.transition = "1.25s cubic-bezier(0,1.11,.68,1.18)";
    eleGame.style.width = "0px";
    eleGame.style.height = "0px";
    for(var i = 0; i < contTrash.length; i++){
        contTrash[i].style.transform = "translate(-100px,-100px)";
    }
}

function moveUFO(e) {
    var x = e.clientX;
    var y = e.clientY;
    if(eleGame.style.width != "0px"){
        var ufoCenterW = eleUFO.clientWidth/2;
        var ufoCenterH = eleUFO.clientHeight/2;
    	eleUFO.style.transform = "translate("+(x-ufoCenterW)+"px,"+(y-50)+"px)";
    }
}

function onRand(){
    var x,y;
    for(var i = 0; i < contTrash.length; i++){
        x = Math.floor(Math.random()*(eleGame.clientWidth-100));
        y = Math.floor(Math.random()*(eleGame.clientHeight-100));
        contTrash[i].style.transform = "translate("+(x+50)+"px,"+(y+50)+"px)";
        contTrash[i].onmousemove = function() {handleTrash(this)};
    }
}


function handleTrash(ele){
    var x = event.clientX;
    var y = event.clientY;
    var ufoCenterW = eleUFO.clientWidth/2;
    var ufoCenterH = eleUFO.clientHeight/2;
    ele.style.transform = "translate("+(x-ufoCenterW)+"px,"+(y+ufoCenterH+25)+"px)";
    ele.style.transition = "0.75s ease";
    setTimeout(() => {
        ele.style.display = "none";
    }, 700);
}