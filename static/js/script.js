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
