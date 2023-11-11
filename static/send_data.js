var button_send = document.getElementById("button_send");
var select_brand = document.getElementById("brand");
var select_model = document.getElementById("model");
var select_year = document.getElementById("year");
var select_color = document.getElementById("color");
var select_ = document.getElementById("car equipment");

function sendData(){
    //alert("Сработала кнопка, УРА!!!");
    window.location.href = "fillingdata.html";
}

button_send.addEventListener("click", sendData);