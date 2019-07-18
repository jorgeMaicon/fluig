//FUNÇÃO P/ PEGAR DATA ATUAL FORMATADA
var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    var dataFormatada = diaF+"/"+mesF+"/"+anoF;

//chamada com aviso
if((diaF != "15") && (diaF != "16")){
			fluigAlert('Solicitações de Empréstimo Consignado só são aceitas entre o dia 15 a 20 de cada mês.', 'ERRO');
}

//PEGAR DIFERENÇA ENTRE DUAS DATAS EM DIAS
function dataDiff(data1, data2){
	var DAY = 1000 *  60 * 60  * 24
	var days_passed = Math.round((data2.getTime() - data1.getTime()) / DAY)
	
  //comparação com um ano
	if(days_passed < 365){
		$("#anoempresa").val("N");
		fluigAlert('Funcionário ainda não completou 1 ano de registro.', 'ERRO');		
	}
	else{
		$("#anoempresa").val("S");
	}
	return days_passed;
}


