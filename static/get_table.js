var data = [
  {
    "brand": "Kia",
    "model": "Cerato",
    "color": "красный",
    "year": "2021",
    "equipment": "средняя",
	"price": "3 015 900 ₽",
	"img": "Kia_Cerato_красный.jpg",
  },
  {
    "brand": "Kia",
    "model": "K5",
    "color": "серый",
    "year": "2022",
    "equipment": "максимальная",
	"price": "3 444 900 ₽",
	"img": "Kia_K5_серый.jpg",
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "color": "синий",
    "year": "2022",
    "equipment": "средняя",
	"price": "3 269 900 ₽",
	"img": "Hyundai_Elantra_синий.jpg",
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "color": "красный",
    "year": "2022",
    "equipment": "максимальная",
	"price": "4 269 900 ₽",
	"img": "Hyundai_Elantra_красный.jpg",
  },
  {
    "brand": "Hyundai",
    "model": "Sonata",
    "color": "белый",
    "year": "2023",
    "equipment": "базовая",
	"price": "3 122 900 ₽",
	"img": "Hyundai_Sonata_белый.jpg",
  },
 ]
var keys = [];
var div_table = document.getElementById("tablecar");
var html_table = "";
html_table = html_table + "<table><tr>";
/*for (key in data[0]) {
	html_table = html_table + "<td>" + key + "</td>";
}*/
html_table = html_table + "</tr>";
for (var i = 0; i < data.length; i++) {
	html_table = html_table + "<tr>";
	for (key in data[i]) {		
		if (key === "img"){
			html_table = html_table + "<td>" + "<img width=200 height=100 src='D:/Учеба УГАТУ/4 курс/Проектрирование человеко-машинного интерфейса/Лабы/ЛР№5/CarSalon2/img_car/" + data[i][key] + "'>" + "</td>";
		}
		else{
			html_table = html_table + "<td>" + data[i][key] + "</td>";
		}		
	}
	html_table = html_table + "</tr>";
}
html_table = html_table + "</table>";
div_table.innerHTML = html_table;