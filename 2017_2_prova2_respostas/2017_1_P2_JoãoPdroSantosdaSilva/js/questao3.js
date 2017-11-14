$(function(){
	var cep=$("#cep").val();
	if(!(cep>=20000 && cep<=30000){
	 	$("#cep").alert("Prezado cliente, 
							Lamentamos, pois estamos em fase de expansão e por enquanto não atendemos sua região. 
							Atenciosamente, ArtCom");
	 }

	 var quantidade =$("#quantidade").val();
	 if(quantidade>20){
	 	$("#quantidade").alert("Prezado cliente, 
								Somos um pequeno varejo destinado a atender consumidores domésticos. 
								Atenciosamente, ArtCom.");
	 }

	 var frete;
	 if(cep>=20000 && cep<25000){
	 	frete= 5+1*quantidade;
	 }
	 if(cep>=25000 && cep<30000){
	 	frete= 7,50+1,25*quantidade;
	 }

	 var valorTotal;
	 valorTotal=valorUnitario+frete;

	 	
});

