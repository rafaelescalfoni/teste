$(function(){
	var cep = $("#cep").val();
	
	if(cep < "20000" || cep > "30000"){
		alert("Prezado cliente, Lamentamos, pois estamos em fase de expansão e por enquanto não atendemos sua região. Atenciosamente, ArtCom");
	}
	else if () {
		(cep <= "25000"){
			var valfixo = 5.00;
			var valunid = 1.00;
		}
		else {
			var valfixo = 7.50;
			var valunid = 1.25;
		}
	}





		function validarqtd() {
			var quantidade = $("#quantidade").val();
			if(quantidade > 20){
				alert("Prezado cliente, Somos um pequeno varejo destinado a atender consumidores domésticos. Atenciosamente, ArtCom.");
			}
			$("#quantidade").focus();

		}
};