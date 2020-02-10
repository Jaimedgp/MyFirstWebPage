//document.body.onscroll = function() {showDescription()};

var sections = ["presnt", "acad", "code", "sprt", "photo"];
var ndiv=0;
var lastScrollTop = 0;

function showDescription () {

	var st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > 300) {

		if (st > lastScrollTop){
			if (ndiv < sections.length-1 && ndiv >= 0) {
				var hash = "#"+sections[ndiv];
				$('html, body').animate({ scrollTop: $(hash).offset().top }, 800, 
							function(){ window.location.hash = hash; });
			}
			ndiv++;

		}else {
			if (ndiv < sections.length && ndiv > 0) {

				var hash = "#"+sections[ndiv];
				$('html, body').animate({ scrollTop: $(hash).offset().top }, 800, 
							function(){ 
								window.location.hash = sections[ndiv]; 
							});
			}
			ndiv--;
		}

		lastScrollTop = st <= 0 ? 0 : st;
	}
}
