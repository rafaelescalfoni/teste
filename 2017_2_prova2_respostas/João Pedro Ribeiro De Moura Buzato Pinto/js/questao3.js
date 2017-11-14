$(function(){
				var id = getUrlVars().filmeId;

				$.each(filmes, function(indice, filme){
					if (filme.id == id) {
						$("#resumo").text(filme.resumo);

						$("h1").text(filme.titulo);

						$("img").attr("src",filme.figura);

						$("#generos").text(filme.generos);

						$("#classificacao")
							.text(filme.classificacao);

						$("#elenco").text(filme.elenco);								

						$("#semelhantes").text(filme.titulosSemelhantes)




					}
				})
			})