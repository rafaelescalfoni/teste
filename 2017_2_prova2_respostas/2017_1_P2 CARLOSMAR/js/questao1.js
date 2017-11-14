$(function() {				
	
	$.each(filmes, function(filmes, obj){
		$("body").append($("<div />").addClass("col-sm-5 col-md-3")
			.append($("<div />").addClass("thumbnail")
				.append($("<img/>").attr("src",obj.figura))
					.append($("<div />").addClass("caption")
						.append($("<h3/>").text(obj.titulo))                               
							.append($("<p'/>").text(obj.resumo))
								.append($("<a />").addClass("btn btn-primary")
									.attr("href", "questao3_detalhes.html?filmeId").attr("role", "button")
										.text("Detalhes"))))						
			);

	});
});