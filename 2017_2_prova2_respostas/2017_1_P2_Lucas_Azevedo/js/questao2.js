$(function() {
	$.each(filmes, function(indice, filme) {
		$("#galeria")
			.append($("<div/>")
				.addClass("col-sm-5")
				.addClass("col-md-3")
				.append($("<div/>")
					.addClass("thumbnail")
					.css("height", "350px")
					.append($("<img/>")
						.attr("src", filme.figura))
					.append($("<div/>")
						.addClass("caption")
						.append($("<h3/>")
							.text(filme.titulo))
					.append($("<p/>")
						.text(filme.resumo))
					.append($("<a/>")
						.addClass("btn")
						.addClass("btn-primary")
						.attr("href", "questao3_detalhes.html?filmeId=" + filme.id)
						.attr("role", "button")
						.text("Detalhes")))));
	});

});