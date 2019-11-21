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

function createColumns(json) {
	var mainRow = document.getElementsByClassName('row')[0];
	var numRows = (json.length / 6 | 0) + 1;
	var columns = new Array(6)

	for (i=0; i < 6; i++) {
		columns[i] = document.createElement('div');
		columns[i].className = 'column';
	}

	for (i=0; i<numRows; i++) {

		for (j=6*i; j<6*(i+1); j++) {
			if (j < json.length) {
				getFiles(json[j], columns[j-6*i])
			} else {
				break;
			}
		}

	}

	for (i=0; i < 6; i++) {
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
