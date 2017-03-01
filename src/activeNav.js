window.onload = function(){
	//TODO: better functional active "buttons". At the moment they only show active after clicking another element on the page.
	//
	$(".navButton").on("click", function() {
    	$(".navButton").removeClass("active");
    	$(this).addClass("active");
    });
}
