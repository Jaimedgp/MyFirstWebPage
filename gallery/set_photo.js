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

	var ileft = document.createElement('div');
	ileft.align = "right";
	ileft.innerHTML = "<br><br>"+obj.place+"<br>"+obj.date;

	// The variable icontainer is still good... Just append to it.
	icontainer.appendChild(iImg);
	icontainer.appendChild(iOverlay);
	icontainer.appendChild(iDescription);
	iDescription.appendChild(iText);
	iText.appendChild(ileft);

	colm.appendChild(icontainer);
}

function createColumns(json) {
	var mainRow = document.getElementsByClassName('row')[0];
	var numColumns = 3;
	var numRows = (json.length / numColumns | 0) + 1;
	var columns = new Array(numColumns);

	for (i=0; i < numColumns; i++) {
		columns[i] = document.createElement('div');
		columns[i].className = 'column';
	}

	for (i=0; i<numRows; i++) {

		for (j=numColumns*i; j<numColumns*(i+1); j++) {
			if (j < json.length) {
				getFiles(json[j], columns[j-numColumns*i]);
			} else {
				break;
			}
		}

	}

	for (i=0; i < numColumns; i++) {
		mainRow.appendChild(columns[i]);
	}
}


function openJSON(path) {
	fetch(path)
		.then(function(data) {
			return data.json();
		})
		.then(function(myjson) {
			createColumns(myjson["files"]);
		})
}

var path = 'https://raw.githubusercontent.com/Jaimedgp/jaimedgp.github.io/master/gallery/museum.json'
openJSON(path);
