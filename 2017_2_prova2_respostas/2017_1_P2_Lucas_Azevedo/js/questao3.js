$(function() {
	var id = getUrlVars().filmeId;

	$.each(filmes, function(indice, filme) {

		if (filme.id == id ) {

			$("h1").text(filme.titulo);

			$("img").attr("src", filme.figura);

			$("#resumo").text(filme.resumo);

			$("#generos")
				.append($("<ul/>"));

			$.each(filme.generos, function(indice, genero) {
							
			$("#generos").find("ul")
				.append($("<li/>").text(genero));

			});

			$("#classificacao").text(filme.classificacao + " anos");

			$("#elenco")
				.append($("<ul/>"));

			$.each(filme.elenco, function(indice, elenco) {

				$("#elenco").find("ul")
					.append($("<li/>").text(elenco));
			});

			$.each(filme.titulosSemelhantes, function(indice, semelhante) {
			
				$.each(filmes, function(indice, film) {
					if (film.id == semelhante) {
						$("#semelhantes")
							.append($("<img/>")
								.attr("src", film.figura))
							.append($("<p/>").text(film.resumo));

					}
				});

			});
		}

	});
});

