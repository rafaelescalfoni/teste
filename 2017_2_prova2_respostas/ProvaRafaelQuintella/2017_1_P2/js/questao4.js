$(function(){

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

    $(itens).each(function(pos,produto) {
      $("#produtosCmb")
        .append($("<option />")
          .attr("value", produto.id)
          .text(produto.nome + " - preço R$ " + produto.valor)
        );
    });

  $("#cep").click(function(){
    var valor_cep = $("#cep").val();

    if(valor_cep >= 20000 && valor_cep <= 30000){
        alert("Prezado cliente,Lamentamos, pois estamos em fase de expansão e por enquanto não atendemos sua região.Atenciosamente, ArtCom");
    }

    var qtd_produto = $("#quantidade").val();

    if(qtd_produto >= 20){
        alert("Prezado cliente, Somos um pequeno varejo destinado a atender consumidores domésticos. Atenciosamente, ArtCom");
    }

    if(valor_cep <= 200000 && valor_cep <= 25000){
      var valor_frete = (5 + (1 * qtd_produto));
    }else{
      var valor_frete = (7,5 + (1,25 * qtd_produto));
    }



    $("#botao_calcular").click(function(){
        $(calculaTotal).on(function(){
          var valor_total = $("#produtosCmb").val(produto.valor);
          var valor_total_calculado = valor_total + valor_frete;
        }
      );
      $("#valorTotal").append($("<span/>").text(valor_total_calculado));
    });

  });


})
