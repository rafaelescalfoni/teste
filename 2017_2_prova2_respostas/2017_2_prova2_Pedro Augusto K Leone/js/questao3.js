$(function(){
	var id = getUrlVars();
	$.each(filmes, function(indice, filmes){
		if (filmes id == id){

			$("h1").text(filme_titulo);

			$("img").attr("src", filme.figura);

			$("#resumo").text(filmes_resumo);

			$("#generos")
				.append($("ul/>"));

			$.each(filmes_genero, function(indice, generos){
				$("#generos").find("ul")
					.append("<il/>").text(generos);
			});
			$.each(filmes_classificacao, function(indice, classificacao){
				$("#classificacao").find("ul")
					.append("<il/>").text(classificacao);
			});
			$.each(filmes_elenco, function(indice, elenco){
				$("#elenco").find("ul")
					.append("<il/>").text(elenco);
			});
			$.each(filmes_titulosSemelhantes, function(indice, titulosSemelhantes){
				$("#titulosSemelhantes")
					.append("img")
						.atr("src").text(titulosSemelhantes);
			});
		}
	});
});
function retornalFigura(id){
	$.each(filmes, function(indice, filme){
		if(filmes.id == id){
			return filme.figura;
		}
	})
}