trs = document.getElementsByTagName("tr");
for (let tr of trs) {
	tr.addEventListener("click", () => {
    cells = tr.getElementsByTagName('td');
    /*console.log(cells[0]);
    console.log(cells[1]);
	
	

    const content1 = cells[0].innerHTML;
    console.log(content1);

    const content2 = cells[1].innerHTML;
    console.log(content2);
	*/
	localStorage.setItem('img',cells[0].innerHTML);
	localStorage.setItem('brand', cells[1].innerHTML);
    localStorage.setItem('model', cells[2].innerHTML);
    localStorage.setItem('year', cells[3].innerHTML);
    localStorage.setItem('color',cells[4].innerHTML);
    localStorage.setItem('car_equipment',cells[5].innerHTML);
	localStorage.setItem('price',cells[6].innerHTML);
	console.log(cells[0].innerHTML);
	
	window.location.href = "fillingdata.html";
	});

}