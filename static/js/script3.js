$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		var positionAbouts= $("#content-s").position();
		console.log(scrollTop);
		var topMenu=positionAbouts.top;
		console.log(topMenu);
		
		if(scrollTop >= topMenu){
			$(".nav-estilos").addClass('navbar-fondo-seg');
			$(".nav-estilos").removeClass('navbar-fondo-inicio');

		}else{
			$(".nav-estilos").addClass('navbar-fondo-inicio');
			$(".nav-estilos").removeClass('navbar-fondo-seg');//
		}
});



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

