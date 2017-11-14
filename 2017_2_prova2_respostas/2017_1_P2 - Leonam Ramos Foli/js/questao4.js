$(itens).each(function(pos,produto) {
		$("#produtosCmb")
			.append($("<option />")
				.attr("value", item.id)
				.text(item.nome + " - preço R$ " + item.valor)
			);
	});
};

var itens = [ { 
"id" : "1",
"nome": "Vaso",
"dimensao": "10x30cm",
"material": "ceramica",
"artesao": "Ronaldo Moreira",
"valor": "20"
}, ...]