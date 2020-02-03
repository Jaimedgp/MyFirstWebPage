document.body.onscroll = function() {showDescription()};

title = document.getElementById("Title")
description = document.getElementById("description")

function showDescription () {

	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		//title.style.textAlign = "left";
		title.style.fontSize = "1000%";
		title.style.marginTop = "50px";

		description.innerHTML = "Hola a todos como estamos supercalifragilisticoespialidoso"

	}else {
		//title.style.textAlign = "center";
		title.style.fontSize = "1750%";
		title.style.marginTop = "100px";

		description.innerHTML = "Physicist and MSc Data Science student"
	}


}