trs = document.getElementsByTagName("tr");
for (let tr of trs) {
	tr.addEventListener("click", () => {
	cells = tr.getElementsByTagName('td');
	console.log(cells[0].getElementsByTagName('img')[0].getAttribute('src'));
	
	localStorage.setItem('img', cells[0].getElementsByTagName('img')[0].getAttribute('src'));
	localStorage.setItem('brand', cells[1].innerHTML);
	localStorage.setItem('model', cells[2].innerHTML);
	localStorage.setItem('color', cells[3].innerHTML);
	localStorage.setItem('year',cells[4].innerHTML);
	localStorage.setItem('car_equipment',cells[5].innerHTML);
	localStorage.setItem('price',cells[6].innerHTML);

	window.location.href = "fillingdata.html";
	});
}