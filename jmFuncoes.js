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
