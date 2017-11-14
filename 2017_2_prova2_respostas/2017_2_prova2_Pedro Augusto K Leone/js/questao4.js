$(function(){
	$.each(itens, function(incice, item){
		$("#produtosCmb")
			.append($("<caption/>")
				.attr("value", item.id)
				.text(item.nome + "" +item.material));
		
	});
});	

function validarCep(cep){
		var cep = $("#cep").val();
	if(cep > "30000" || cep < "20000") {
		alert("Prezado cliente. Lamentamos, pois estamos em fase de expansão e por enquanto não atendemos sua região. Atenciosamente, ArtCom")
		return false;
	}else{
		return true;
	}
}

function validarQuantidade(quantidade){
	var quantidade = $("#quantidade").val();
	if(quantidade > 20){
		alert("Por se tratar de um varejo de artesãos, só serão aceitos pedidos de no máximo 20 volumes por produto.")
		$("#quantidade").focus();
		return false;
	}
	return true;
}

function calcularFrete(cep, quantidade) {
	var frete;
	if(cep >="20000" && cep <= "25000"){
		frete = 5.00 + 1.00 * quantidade;
	}
	else if(cep > "25000" && cep  < "30000"){
		frete = 7.50 + 1.25 * quantidade;
	}
	return frete;
}

function calculoTotal(){
	var cep = $("#cep").val();
	var quantidade = $("#quantidade").val();
	var total;
	validarCep(cep);
	validarQuantidade(quantidade);
	total = calcularFrete(cep, quantidade);
}
function adicionarProduto() {
	var produtoId = $("#produtosCmb".val();
	var produto;
	var quantidade = $("#quantidade").val();

	$.each(item,m function(indice, item){
		if(produtoId == item.id){
			produto = item.nome + "" + item.material;
		}
	});
	if(validarQuantidade(quantidade) && validarCep(cep))
		$("table")
			.append($("<tr/>").
				.append($("<td/>").text(produto))
				.append($("<td/>").text(quantidade))
				.append($("<td/>").text(produto))
				.append($("<td/>").text(calculoTotal(produtoId, quantidade, cep))));
	})
}
