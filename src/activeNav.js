module.exports.activeNav = function(){
	$(".navButton").on("click", function() {
    	$(".navButton").removeClass("active");
    	$(this).addClass("active");
    })
};