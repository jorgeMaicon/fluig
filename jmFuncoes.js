//Dispara mensagem de erro dentro da função beforeSendValidate 
if(condição){
     throw "Escreva aqui a mensagem de erro "
}

//Exibe popup de aviso
if (condição){
     fluigAlert('Mensagem', 'ATENÇÃO');
}

//Função que pega o valor de um campo, e utiliza como final de código de papel pre determinado
$(document).ready(function() {	
	$("#campo_selecionador_papel").change(function(){
	     var papel = "Pool:Role:codigo_papel_"+$(this).val();
	      $("#campo_mecanismo_atribuicao").val(papel);
	});
});

//Bloquear envio a partir do ano de um determinado campo de data
var data = $("#campoData").val();
var ano = data.substring(6,10)    
$("#campoAno").val(ano);

if(ano == "2019"){
   throw "Mensagem de erro "
}

//Bloquear envio a partir do dia de um determinado campo de data
var data = $("#campoData").val();
var dia = data.substring(0,2)    
$("#campoAno").val(dia);

if(dia == "01"){
   throw "Mensagem de erro "
}

//Bloquear envio a partir do dia de um determinado campo de data
var data = $("#campoData").val();
var mes = data.substring(3,5)    
$("#campoAno").val(mes);

if(mes == "02"){
   throw "Mensagem de erro "
}
