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
<<<<<<< HEAD:static/js/script.js
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
=======
});


>>>>>>> 99cd1e8706d0e1236eaad8662406cee0b31614ee:static/js/script3.js

const fn_async = async () => {
	let form = document.getElementById("fomr-id")
	let url = form.getAttribute("data-url-post")
	let formData = new FormData(form)

	let response = await fetch(url, {
		method: "POST",
		body: formData
	}).then(res => res.json())
	
	let errors = response['errors']
	if (errors != ""){
		alert("El formulario tiene errores")
		// aqui dentro mostrar los errores que tenga en formulaio
		console.log(errors); // show errors in form
	}else {
		alert("El formulario no tiene errores")
	}
	}

let button = document.getElementById("form_button")

button.addEventListener('click', fn_async)

