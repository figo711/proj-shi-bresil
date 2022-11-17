window.onscroll = function() {scrollProgress()};

function resize_box() {

}

function scrollProgress() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	var cbar = document.getElementById('concrete-bar');
	cbar.style.width = scrolled + "%";
	if (scrolled > 95) cbar.innerText = "👽 Terminé 👽";
	else cbar.innerText = "Progression";
}