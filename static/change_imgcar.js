let file_name_car = '';
let name_car = '';
let price = '';
let color = '';
let equipment = '';

if (localStorage.getItem('brand') === 'Kia'){
    if (localStorage.getItem('model') === 'Cerato'){
        file_name_car = 'Kia_Cerato.jpg';
        name_car = 'Kia Cerato 2021';
        price = '3 015 900 ₽';
        color = 'Цвет: красный';
        equipment = 'Комплектация: средняя';

    }
	else if (localStorage.getItem('model') === 'K5'){
        file_name_car = 'Kia_K5.jpg';
        name_car = 'Kia K5 2022';
        price = '3 444 900 ₽';
        color = 'Цвет: серый';
        equipment = 'Комплектация: максимальная';
    }
	
}
else if (localStorage.getItem('brand') === 'Hyundai'){
        if (localStorage.getItem('model') === 'Elantra'){
        file_name_car = 'Hyundai_Elantra.jpg';
        name_car = 'Hyundai Elantra 2022';
        price = '3 269 900 ₽';
        color = 'Цвет: синий';
        equipment = 'Комплектация: средняя';
    }
	else if (localStorage.getItem('model') === 'Sonata'){
        file_name_car = 'Hyundai_Sonata.jpg';
        name_car = 'Hyundai Sonata 2023';
        price = '3 122 900 ₽';
        color = 'Цвет: белый';
        equipment = 'Комплектация: базовая';
    }
}


document.getElementById("imgcar").src = 'img/' + file_name_car;
document.getElementById("name_car").textContent = name_car;
document.getElementById("price").textContent = price;
document.getElementById("color").textContent = color;
document.getElementById("equipment").textContent = equipment;



