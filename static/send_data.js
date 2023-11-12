var button_send = document.getElementById("button_send");
var select_brand = document.getElementById("brand");
var select_model = document.getElementById("model");
var select_year = document.getElementById("year");
var select_color = document.getElementById("color");
var select_car_equipment = document.getElementById("car equipment");


function sendData(){
    //alert("Сработала кнопка, УРА!!!");
    if (select_brand.value === '-' ||
        select_model.value === '-' ||
        select_year.value === '-' ||
        select_color.value === '-' ||
        select_car_equipment.value === '-'){
        alert('Заполните все поля');
    }
    else{
        console.log("brand_index:", select_model.options[select_model.selectedIndex].index);
        console.log("brand_text:", select_model.options[select_model.selectedIndex].text);
        console.log("brand_value:", select_model.options[select_model.selectedIndex].value);
        console.log("type:", typeof(select_brand));
        localStorage.setItem('brand', select_brand.options[select_brand.selectedIndex].text);
        localStorage.setItem('model',select_model.options[select_model.selectedIndex].text);
        localStorage.setItem('year',select_year.options[select_year.selectedIndex].text);
        localStorage.setItem('color',select_color.options[select_color.selectedIndex].text);
        localStorage.setItem('car_equipment',select_car_equipment.options[select_car_equipment.selectedIndex].text);

        window.location.href = "fillingdata.html";
    }

}

button_send.addEventListener("click", sendData);