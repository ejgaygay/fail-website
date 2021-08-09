//Typewrites Hello World
var i = 0;
var txt = "Hello World;My name is EJ Gaygay;";
var speed = 75;
function typeWrite() {
    if (i < txt.length){
        document.getElementById("greeting").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
    if (i == txt.length-21){
        document.getElementById("greeting").innerHTML += "<br>";
    }
}
