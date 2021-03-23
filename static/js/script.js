/*
$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		var positionAbouts= $("#content-s").position();
		var topMenu=positionAbouts.top;
		
		if(scrollTop >= topMenu){
			$(".nav-estilos").addClass('navbar-fondo-seg');
			$(".nav-estilos").removeClass('navbar-fondo-inicio');

		}else{
			$(".nav-estilos").addClass('navbar-fondo-inicio');
			$(".nav-estilos").removeClass('navbar-fondo-seg');//
		}
	});
*/

var elementoSubir = document.getElementById("flecha-subir");
var positionScroll = 0;
window.addEventListener('scroll', function(e) {
	positionScroll = window.scrollY;
	var height = screen.height;
	
	    if(positionScroll != 0){
	    	if(!elementoSubir.classList.contains('flecha-subir')){
	    		elementoSubir.classList.add('flecha-subir');
	    	}
		} else {
			elementoSubir.classList.remove('flecha-subir');
		}
});

elementoSubir.addEventListener('click', () => {
	//window.scrollTo(0, 0);
  $('html, body').animate({
          scrollTop: 0
        }, 1000);
});

const ajax = () => {
	let form = document.getElementById("fomr-id")
	let url = form.getAttribute("data-url-post")
	let formData = new FormData(form)

	let request = fetch(url, {
		method: "POST",
		body: formData //form
	})

	request.then(response => {
		console.log(response)
	}).catch(e => {
		console.log(e)
	})
}

let button = document.getElementById("form_button")

button.addEventListener('click', () => {
	ajax()
})
