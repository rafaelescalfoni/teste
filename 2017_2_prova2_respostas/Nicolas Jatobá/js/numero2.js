$(function(){

  function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      return vars;
  }

  var filmeId = getUrlVars().filmeId;


  $.each(filmes, function(filme, obj){
        if(filmeId == obj.id){

        var genero =  $("<ul />");
        var elenco =  $("<ul />");
        var titulos =  $("<div />");


    $.each(obj.generos, function(obj, generos){
          genero.append($("<li />").text(generos));

      });

    $.each(obj.elenco, function(obj, artista){
          elenco.append($("<li />").text(artista));

      });

    $.each(obj.titulosSemelhantes, function(obj, semelhantes){
        $.each(filmes, function(indice, filme){
            if(semelhantes == filme.id){
            titulos.append($("<img />").attr("src", filme.figura).attr("class", "img"))
            titulos.append($("<p />").text(filme.resumo));
          }

    })
  })

      $("#titulo").append($("<h1 />").text(obj.titulo))
          .append($("<img />").attr("src", obj.figura).attr("class", "img"))

      $("#resumo").append($("<p />").text(obj.resumo))

      $("#generos").append(genero)
      $("#classificacao").append($("<p />").text(obj.classificacao))
      $("#elenco").append(elenco)
      $("#semelhantes").append(titulos)

}
})

})
