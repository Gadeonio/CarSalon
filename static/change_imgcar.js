let name_car = '';
if (localStorage.getItem('brand') === 'Kia'){
    if (localStorage.getItem('model') === 'Cerato'){
        name_car = 'Kia_Cerato.jpg';
    }
}
else{
    alert('Машины не будет, Алина приняла лень');
}
document.getElementById("imgcar").src='img/' + name_car;

