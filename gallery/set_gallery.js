function getFiles(obj, colm, modalArr) {
	
	// Create a Container and add Modal when click
	var icontainer = document.createElement('div');
	icontainer.className = 'container';
	icontainer.onclick = function() {
		modalArr[0].style.display = "block";
		modalArr[1].src = obj.src;
		modalArr[2].innerHTML = "<h2>"+obj.title+"</h2>"+
								"<p>"+obj.description+
									"<div align='right'>"+obj.place+", "+obj.date+"</div>"
								+"</p>";
	};

	// Now create and append to icontainer
	var iImg = document.createElement('img');
	iImg.className = "myImg";
	iImg.src = obj.src;
	iImg.style = "width:100%";

	// Create overlay to add Title
	var iOverlay = document.createElement('div');
	iOverlay.className = "overlay";
	iOverlay.innerHTML = obj.title;

	// The variable icontainer is still good... Just append to it.
	icontainer.appendChild(iImg);
	icontainer.appendChild(iOverlay);

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

		mainRow.appendChild(columns[i]);
	}

	fillColumn(columns, numRows, json);
}


function fillColumn(colArr, numRows, json) {
	// Get the modal
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	var modalArray = [modal, modalImg, captionText];

	for (i=0; i<numRows; i++) {
		for (j=colArr.length*i; j<colArr.length*(i+1); j++) {
			if (j < json.length) {
				getFiles(json[j],
					     colArr[j-colArr.length*i],
					     modalArray
				        );
			} else {
				break;
			}
		}
	}
}


function openGallery() {
	var path = 'https://raw.githubusercontent.com/Jaimedgp/jaimedgp.github.io/master/gallery/museum.json';
	fetch(path)
		.then(function(data) {
			return data.json();
		})
		.then(function(myjson) {
			createColumns(myjson["files"]);
		})
}

openGallery();
