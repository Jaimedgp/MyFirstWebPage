getFiles = function(obj, colm) {
	var icontainer = document.createElement('div');
	icontainer.className = 'container';

	// Now create and append to icontainer
	var iImg = document.createElement('img');
	iImg.src = obj.src;
	iImg.style = "width:100%";

	var iOverlay = document.createElement('div');
	iOverlay.className = "overlay";
	iOverlay.innerHTML = obj.title;

	var iDescription = document.createElement('div');
	iDescription.className = "description";

	var iText = document.createElement('div');
	iText.className = "text";
	iText.innerHTML = obj.description;

	// The variable icontainer is still good... Just append to it.
	icontainer.appendChild(iImg);
	icontainer.appendChild(iOverlay);
	icontainer.appendChild(iDescription);
	iDescription.appendChild(iText);

	colm.appendChild(icontainer);
}

var text = '{ "files":[ { "src":"photos/IMG_0002.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0001.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0003.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0004.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0005.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0006.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0007.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0008.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0009.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0010.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0011.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" }, { "src":"photos/IMG_0012.jpg", "title":"Media Maraton", "description":"Foto de la Media Maraton de Langreo" } ] }'

var obj = JSON.parse(text);

var numRows = obj["files"].length / 12;
var mainRow = document.getElementsByClassName('row')[0];

for (j=0; j<12; j++) {
	var elem = document.createElement('div');
	elem.className = 'column';

	for (i=0; i<numRows; i++) {
		getFiles(obj["files"][i+(j*numRows)], elem)
	}

	mainRow.appendChild(elem);
}

