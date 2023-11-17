var data = [
{
	"img": "Kia_Cerato_красный.jpg",
    "brand": "Kia",
    "model": "Cerato",
    "color": "Красный",
    "year": "2021",
    "equipment": "Средняя",
	"price": "3 015 900 ₽"
  }
  ,
  {
  	"img": "Kia_K5_серый.jpg",
    "brand": "Kia",
    "model": "K5",
    "color": "Серый",
    "year": "2022",
    "equipment": "Максимальная",
	"price": "3 444 900 ₽"
  },
  {
  	"img": "Hyundai_Elantra_синий.jpg",
    "brand": "Hyundai",
    "model": "Elantra",
    "color": "Синий",
    "year": "2022",
    "equipment": "Средняя",
	"price": "3 269 900 ₽"
  },
  {
  	"img": "Hyundai_Elantra_красный.jpg",
    "brand": "Hyundai",
    "model": "Elantra",
    "color": "Красный",
    "year": "2022",
    "equipment": "Максимальная",
	"price": "4 269 900 ₽"
  },
  {
  	"img": "Hyundai_Sonata_белый.jpg",
    "brand": "Hyundai",
    "model": "Sonata",
    "color": "Белый",
    "year": "2023",
    "equipment": "Базовая",
	"price": "3 122 900 ₽"
  }
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
			html_table = html_table + "<td>" + "<img width=200 height=130 src='img_car/" + data[i][key] + "'>" + "</td>";
		}
		else{
			html_table = html_table + "<td>" + data[i][key] + "</td>";
		}		
	}
	html_table = html_table + "</tr>";
}
html_table = html_table + "</table>";
div_table.innerHTML = html_table;