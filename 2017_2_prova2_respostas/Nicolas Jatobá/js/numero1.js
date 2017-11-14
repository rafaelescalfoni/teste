$(function(){

          var servico = "./js/filmes.js";



          $.each(filmes, function(filme, obj){

              $("#galeria").append($("<div />").addClass("col-sm-5 col-md-3")
                            .append($("<div />").addClass("thumbnail")
                            .append($("<img />").attr("src", obj.figura).attr("class", "img"))
                             .append($("<div />").addClass("caption")
                             .append($("<h3 />").text(obj.titulo))
                             .append($("<p />").text(obj.resumo))
                             .append($("<p />")
                             .append($("<a />").attr("class", "btn btn-primary").attr("href", "Numero2.html?filmeId="+ obj.id)
                                                .attr("role", "button").text("detalhes"))))))


            })



})
