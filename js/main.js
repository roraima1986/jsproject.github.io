$(document).ready(function(){
	//Slider
	if(window.location.href.indexOf('index') > -1){
		$('.bxslider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
		});
	}

	

	//Posts
	
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec eleifend leo. Praesent suscipit nisi id purus blandit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et dolor sed nulla malesuada tincidunt. Sed molestie pellentesque mattis. Nunc dapibus dui ac pellentesque ornare. Sed scelerisque ut felis et dictum. Fusce turpis metus, tincidunt id porta nec, pretium vitae nisi. Donec euismod massa non nunc convallis tempor. Donec tellus purus, vestibulum a risus finibus, commodo commodo diam. Aenean dolor purus, aliquam sed sagittis vel, suscipit vehicula neque. Suspendisse laoreet tortor id suscipit imperdiet. Donec id fringilla erat. Vestibulum vitae ex eu augue bibendum malesuada. Nam sit amet ex vitae lorem feugiat tempus. Vestibulum dictum massa massa, a commodo neque hendrerit quis.'
			},

			{
				title: 'Prueba de titulo 2',
				date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec eleifend leo. Praesent suscipit nisi id purus blandit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et dolor sed nulla malesuada tincidunt. Sed molestie pellentesque mattis. Nunc dapibus dui ac pellentesque ornare. Sed scelerisque ut felis et dictum. Fusce turpis metus, tincidunt id porta nec, pretium vitae nisi. Donec euismod massa non nunc convallis tempor. Donec tellus purus, vestibulum a risus finibus, commodo commodo diam. Aenean dolor purus, aliquam sed sagittis vel, suscipit vehicula neque. Suspendisse laoreet tortor id suscipit imperdiet. Donec id fringilla erat. Vestibulum vitae ex eu augue bibendum malesuada. Nam sit amet ex vitae lorem feugiat tempus. Vestibulum dictum massa massa, a commodo neque hendrerit quis.'
			},

			{
				title: 'Prueba de titulo 3',
				date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec eleifend leo. Praesent suscipit nisi id purus blandit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et dolor sed nulla malesuada tincidunt. Sed molestie pellentesque mattis. Nunc dapibus dui ac pellentesque ornare. Sed scelerisque ut felis et dictum. Fusce turpis metus, tincidunt id porta nec, pretium vitae nisi. Donec euismod massa non nunc convallis tempor. Donec tellus purus, vestibulum a risus finibus, commodo commodo diam. Aenean dolor purus, aliquam sed sagittis vel, suscipit vehicula neque. Suspendisse laoreet tortor id suscipit imperdiet. Donec id fringilla erat. Vestibulum vitae ex eu augue bibendum malesuada. Nam sit amet ex vitae lorem feugiat tempus. Vestibulum dictum massa massa, a commodo neque hendrerit quis.'
			},

			{
				title: 'Prueba de titulo 4',
				date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec eleifend leo. Praesent suscipit nisi id purus blandit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et dolor sed nulla malesuada tincidunt. Sed molestie pellentesque mattis. Nunc dapibus dui ac pellentesque ornare. Sed scelerisque ut felis et dictum. Fusce turpis metus, tincidunt id porta nec, pretium vitae nisi. Donec euismod massa non nunc convallis tempor. Donec tellus purus, vestibulum a risus finibus, commodo commodo diam. Aenean dolor purus, aliquam sed sagittis vel, suscipit vehicula neque. Suspendisse laoreet tortor id suscipit imperdiet. Donec id fringilla erat. Vestibulum vitae ex eu augue bibendum malesuada. Nam sit amet ex vitae lorem feugiat tempus. Vestibulum dictum massa massa, a commodo neque hendrerit quis.'
			},

			{
				title: 'Prueba de titulo 5',
				date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec eleifend leo. Praesent suscipit nisi id purus blandit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et dolor sed nulla malesuada tincidunt. Sed molestie pellentesque mattis. Nunc dapibus dui ac pellentesque ornare. Sed scelerisque ut felis et dictum. Fusce turpis metus, tincidunt id porta nec, pretium vitae nisi. Donec euismod massa non nunc convallis tempor. Donec tellus purus, vestibulum a risus finibus, commodo commodo diam. Aenean dolor purus, aliquam sed sagittis vel, suscipit vehicula neque. Suspendisse laoreet tortor id suscipit imperdiet. Donec id fringilla erat. Vestibulum vitae ex eu augue bibendum malesuada. Nam sit amet ex vitae lorem feugiat tempus. Vestibulum dictum massa massa, a commodo neque hendrerit quis.'
			},

			{
				title: 'Prueba de titulo 6',
				date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec eleifend leo. Praesent suscipit nisi id purus blandit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et dolor sed nulla malesuada tincidunt. Sed molestie pellentesque mattis. Nunc dapibus dui ac pellentesque ornare. Sed scelerisque ut felis et dictum. Fusce turpis metus, tincidunt id porta nec, pretium vitae nisi. Donec euismod massa non nunc convallis tempor. Donec tellus purus, vestibulum a risus finibus, commodo commodo diam. Aenean dolor purus, aliquam sed sagittis vel, suscipit vehicula neque. Suspendisse laoreet tortor id suscipit imperdiet. Donec id fringilla erat. Vestibulum vitae ex eu augue bibendum malesuada. Nam sit amet ex vitae lorem feugiat tempus. Vestibulum dictum massa massa, a commodo neque hendrerit quis.'
			}
		]

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			$("#posts").append(post);
		});
	}

	//Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//Scroll arriba de la web
	$(".subir").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//Login falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<strong>Bienvenido, " + form_name + "</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
		$("#login form").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

});