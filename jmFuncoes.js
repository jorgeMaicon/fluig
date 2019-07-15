//DISPARA MENSAGEM DE ERRO
if(condição){
     throw "Escreva aqui a mensagem de erro "
}

//FUNÇÃO DE ALERTA
function fluigAlert(message, title,label){
	 message = typeof message !== 'undefined' ? message : "";
	 title = typeof title !== 'undefined' ? title : "Alert";
	 label = typeof label !== 'undefined' ? label : "OK";
	 window.parent.FLUIGC.message.alert({
	  message: message,
	  title: title,
	  label: label
	  });
}
//chamada
fluigAlert('Mensagem', 'ATENÇÃO');


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



//Função para desativar botões e tornar campos em readonly
function SetReadOnly(fieldId, block) {
    $(fieldId).each(function () {
        switch (this.type) {
            case "file":
            case "password":
            case "text":
            case "zoom":
            case "number":
            case "date":
            case "textarea":
            $(this).attr('readonly', block);
                break;
           // case "checkbox":
           // 	{ if (block == true) {$('#'+this.name).attr('disabled')} else {$('#'+this.name).removeAttr('disabled')}}
            case "radio":
                this.checked = block;
                break;
            case "select-one":
            $('#'+this.name + ' option:not(:selected)').attr('disabled', block);
            break;
            case "image":
            case "button":
             if(block) {$(this).hide();} else {$(this).show();}
            break;
        }
    });
}

if (mode != "ADD") {
	SetReadOnly('.ini', true);
	$(".input-group div").removeAttr("onclick");
}

function zoomEmpresa(){
	var filtro = $("#unidade").val();
    tdizoom.open(
            "get_empresa_nf",
            "nroempresa,Código,nomereduzido,Empresa", "nroempresa,Código,nomereduzido,Empresa",
            "Selecione uma Empresa",
            "unidade,"+filtro,
            "empresaNf"
            );
}
