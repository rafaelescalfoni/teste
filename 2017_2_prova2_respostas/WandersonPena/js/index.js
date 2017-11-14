$(function(){
	$("#questao1").hide();
	$("#questao2").hide();
	$("#questao3").hide();
	$("#questao4").hide();

	$("#lnkQuestao1").click(function(){
		$("#questao2").hide();
		$("#questao3").hide();
		$("#questao4").hide();
		$("#questao1").show();
	});
	$("#lnkQuestao2").click(function(){
		$("#questao1").hide();
		$("#questao2").show();
		$("#questao3").hide();
		$("#questao4").hide();
	});
	$("#lnkQuestao3").click(function(){
		$("#questao1").hide();
		$("#questao2").hide();
		$("#questao3").show();
		$("#questao4").hide();
	});
	$("#lnkQuestao4").click(function(){
		$("#questao1").hide();
		$("#questao2").hide();
		$("#questao3").hide();
		$("#questao4").show();
	});

	$(itens).each(function(pos,produto) {
		$("#produtosCmb")
			.append($("<option />")
				.attr("value", produto.id)
				.text(produto.nome + " - preço R$ " + produto.valor)
			);
	});
});

var itens = [
	{	"id" : "1",
		"nome": "Vaso",
		"dimensao": "10x30cm",
		"material": "Cerâmica",
		"artesao": "Ronaldo Moreira",
		"valor": "20"
	},
	{	"id" : "2", "nome": "Jogo de Xícaras",	"dimensao": "200ml", "material": "Porcelana", "artesao": "João Cesar", "valor": "200"},
	{	"id" : "3",	"nome": "Bandeija Lumnia", "dimensao": "10x30cm", "material": "Vidro e aço", "artesao": "Ana Paula Rodrigues", "valor": "250,00" },
	{	"id" : "4",	"nome": "Porta chaves",	"dimensao": "10x10cm",	"material": "Madeira",	"artesao": "José Antônio Silva", "valor": "10,00"},
	{	"id" : "5",	"nome": "Porta Chapéus", "dimensao": "30x180cm", "material": "Madeira",	"artesao": "José Antônio Silva", "valor": "30"},
	{	"id" : "6", "nome": "Vaso",	"dimensao": "10x30cm",	"material": "cerâmica",	"artesao": "Ronaldo Moreira", "valor": "20"},
	{	"id" : "7", "nome": "Jogo de Copos", "dimensao": "250ml", "material": "Cerâmica", "artesao": "João Cesar", "valor": "50" },
	{	"id" : "8", "nome": "Porta-copos", "dimensao": "10cm", "material": "Cortiça", "artesao": "José Antônio Silva", "valor": "17,50"},
	{	"id" : "9", "nome": "Porta Fotos", "dimensao": "10x30cm", "material": "Epoxi", "artesao": "Ana Paula Rodrigues", "valor": "27,50"},
	{	"id" : "10", "nome": "Cinzeiro", "dimensao": "20x20cm", "material": "Epoxi", "artesao": "Ana Paula Rodrigues", "valor": "27,50" },
	{	"id" : "11", "nome": "Xadrez", "dimensao": "50x50cm", "material": "Pedra-sabão", "artesao": "João Cesar", "valor": "270,50"},
	{	"id" : "12", "nome": "Bengala",	"dimensao": "120cm", "material": "Madeira",	"artesao": "José Antônio Silva", "valor": "85,50" }
	];