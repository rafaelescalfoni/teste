$(function() {
	$.each(itens, function(indice, item) {
		$("#produtosCmb")
			.append($("<option/>")
				.attr("value", item.id)
				.text(item.nome + " " + item.material));
	});
	
});

function adicionaProduto() {
	var cep = $("#cep").val();
	var produtoId = $("#produtosCmb").val();
	var produtoValor;
	var produto;
	var quantidade = $("#quantidade").val();

	$.each(itens, function(indice, item) {
		if (produtoId == item.id) {
			produto = item.nome + " " + item.material;
			produtoValor = item.valor;
		}
	});

	if(validarQuantidade(quantidade) && validaCep(cep)){
		$("table")
			.append($("<tr/>")
				.append($("<td/>").text(produto))
				.append($("<td/>").text(quantidade))
				.append($("<td/>").text("R$" + produtoValor))
				.append($("<td/>").text("R$" + calculaTotal(produtoId, quantidade, cep)))
				.append($("<td/>")
					.append($("<span/>")
						.addClass("glyphicon")
						.addClass(" glyphicon-trash"))));
	}

}

function calculaTotal(item, quantidade, cep) {
	var total = 0.0;

	$.each(itens, function(indice, i) {
		if (i.id == item) {
			total += i.valor * quantidade;
		}
	});

	total += calcularFrete(cep, quantidade);

	return total;
}

function validaCep(cep) {
	if (cep < "20000" || cep > "30000") {
 		alert("Prezado cliente, Lamentamos, pois estamos em fase de expansão e por enquanto não atendemos sua região. Atenciosamente, ArtCom");
 		return false;
 	}else {
 		return true;
 	}
}

function validarQuantidade(quantidade) {
	
	if (quantidade == null || quantidade > 20) {
		alert("Prezado cliente, Somos um pequeno varejo destinado a atender consumidores domésticos. Atenciosamente, ArtCom.");
		$("#quantidade").focus();
		return false;
	}
	return true;
}


function calcularFrete(cep, quantidade) {
	var frete;
	if (cep >= "20000" && cep <= "25000") {
		frete = 5.00 + 1.00 * quantidade;
	}
	else if (cep > "25000" && cep < "30000") {
		frete = 7.50 + 1.25 * quantidade;
	}
	return frete;
}