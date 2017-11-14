$(function(){
	$.each(filmes, function(indice, filmes){
		$("galeria")
			.append($("row"))
				.addClass($("col-sm-5"))
				.addClass($("col-md-3"))
				.append($("thumbnail"))
					.addClass($("img"))
					.append($("caption"))
						.addClass($"btn")
						.addClass($"btn-primary")
	}
}