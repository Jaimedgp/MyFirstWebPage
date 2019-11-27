/*
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (i=0; i<img.length; i++) {
	var conts = cont[i];
	conts.onclick = function(){
		modal.style.display = "block";
		modalImg.src = img[i].src;
		captionText.innerHTML = img[i].alt;
	};
}*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	modal.style.display = "none";
}
