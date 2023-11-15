


var car_data = [
  {
    "brand": "Kia",
    "model": "Cerato",
    "color": "Красный",
    "year": "2021",
    "equipment": "Средняя",
	"price": "3 015 900 ₽",
	"img": "Kia_Cerato_красный.jpg"
  },
  {
    "brand": "Kia",
    "model": "K5",
    "color": "Серый",
    "year": "2022",
    "equipment": "Максимальная",
	"price": "3 444 900 ₽",
	"img": "Kia_K5_серый.jpg"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "color": "Синий",
    "year": "2022",
    "equipment": "Средняя",
	"price": "3 269 900 ₽",
	"img": "Hyundai_Elantra_синий.jpg"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "color": "Красный",
    "year": "2022",
    "equipment": "Максимальная",
	"price": "4 269 900 ₽",
	"img": "Hyundai_Elantra_красный.jpg"
  },
  {
    "brand": "Hyundai",
    "model": "Sonata",
    "color": "Белый",
    "year": "2023",
    "equipment": "Базовая",
	"price": "3 122 900 ₽",
	"img": "Hyundai_Sonata_белый.jpg"
  }
 ]

var keys = [];
var div_table = document.getElementById("tablecar");
var html_table = "";

var button_send = document.getElementById("button_send");

var select_brand = document.getElementById("brand");


var select_model = document.getElementById("model");


var select_year = document.getElementById("year");


var select_color = document.getElementById("color");


var select_car_equipment = document.getElementById("car equipment");



tr = document.getElementsByTagName("tr");

function sendData(){
	get_table_with_filter_data(get_filter_data());
	
}

function get_filter_data(){
	let filter_data = car_data;	
	let text_sb = select_brand.options[select_brand.selectedIndex].text;
	let text_sm = select_model.options[select_model.selectedIndex].text;
	let text_sy = select_year.options[select_year.selectedIndex].text;
	let text_sc = select_color.options[select_color.selectedIndex].text;
	let text_sce = select_car_equipment.options[select_car_equipment.selectedIndex].text;
	if (text_sb === "-" && 
		text_sc === "-" &&
		text_sce === "-" && 
		text_sm === "-" && 
		text_sy === "-"){
	}
	else{
		if (!(text_sb === "-")){
			if (text_sm === "-"){
				filter_data = filter_data.filter((item) => {
					return item.brand === text_sb;
				});
			}
			else{
				filter_data = filter_data.filter((item) => {
					return item.model === text_sm;
				});
			}
		}
		if (!(text_sc === "-")){
			filter_data = filter_data.filter((item) => {
					return item.color === text_sc;
				});
		}
		if (!(text_sy === "-")){
			filter_data = filter_data.filter((item) => {
					return item.year === text_sy;
				});
		}
		if (!(text_sce === "-")){
			filter_data = filter_data.filter((item) => {
					return item.equipment === text_sce;
				});
		}
	}
	return filter_data;
}
	

function get_table_with_filter_data(filter_data){
	var keys = [];
	var div_table = document.getElementById("tablecar");
	var html_table = "";
	html_table = html_table + "<table>";
	for (var i = 0; i < filter_data.length; i++) {
		html_table = html_table + "<tr>";
		for (key in filter_data[i]) {		
			if (key === "img"){
				html_table = html_table + "<td>" + "<img width=200 height=100 src='D:/Учеба УГАТУ/4 курс/Проектрирование человеко-машинного интерфейса/Лабы/ЛР№5/CarSalon2/img_car/" + filter_data[i][key] + "'>" + "</td>";
			}
			else{
				html_table = html_table + "<td>" + filter_data[i][key] + "</td>";
			}		
		}
		html_table = html_table + "</tr>";
	}
	html_table = html_table + "</table>";
	div_table.innerHTML = html_table;
}


button_send.addEventListener("click", sendData);

