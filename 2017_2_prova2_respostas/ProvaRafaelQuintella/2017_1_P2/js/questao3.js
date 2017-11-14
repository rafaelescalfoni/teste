$(function(){

    $(filmes).each(function(pos,produto) {
      $(".container-fluid")
        .append($("<p />").text(filmes.resumo)
          .append($("<p />").text(filmes.generos)
            .append($("<p />").text(filmes.classificacao)
              .append($("<p />").text(filmes.elenco)
                .append($("<p />").text(filmes.semelhantes)

        );
    });





})
