function zoomSetor(){
	var filtro = $("#unidade").val();
    tdizoom.open(
            "get_papeis_aprovadores_novo",
            "Papel,Setor / Loja,CC,Centro de Custo", "Cod,Desc,Papel,CC",
            "Selecone o setor/loja responsável",
            "Cod,"+user+",unidade,"+filtro,
            "setor"
            );
}

function zoomNatureza(){
	var filtro = $("#unidade").val();
    tdizoom.open(
            "dsNaturezaDespesa", //dataset
            "codhistorico,Codigo Histórico,descricao,Descrição,contadebito,Conta Debito", //campos de exbição chave valor
            "codhistorico,descricao,contadebito", //campos de retorno
            "Selecione a natureza",	//label
            "unidade,"+filtro, //filtro
            "natureza" //natureza
            );
}

function zoomNaturezaCr(){
	//var filtro = $("#unidade").val();
    tdizoom.open(
            "dsnaturezaCr", //dataset
			"codhistorico,Codigo Histórico,descricao,Descrição,contadebito,Conta Debito", //campos de exbição chave valor
            "codhistorico,descricao,contadebito", //campos de retorno
            "Selecione a natureza",	//label
            "", //filtro
            "naturezaCr" //natureza
            );
}

function getNaturezas(){
	var equipe  = $("#equipe").val();
	if (equipe == "cralves"){
		zoomNaturezaCr();
	}
	else{
		zoomNatureza();
	}
}

function zoomSetorGrid(obj){
	var filtro = $("#unidade").val();
	var nome = $(obj).prev("input").attr("name"); //Nome do input anterior ao botão para identificar o nome do campo + o ID (rat_setor_nm___1)
    tdizoom.open(
            "get_papeis_aprovadores_novo",
            "Papel,Setor / Loja,CC,Centro de Custo", "Cod,Desc,Papel,CC,Tipo",
            "Selecone o setor/loja responsável",
            "Cod,"+user+",unidade,"+filtro,
            nome
            );
}

function zoomContasManutencao(){
    tdizoom.open(
            "contas_manutencao",
            "SEQ,SEQ,desconta,Tipo,status,Descrição", 
            "SEQ,SEQ,desconta,Descrição da Conta,status,Status",
            "Selecione uma conta",
            "",
            "contasmanutecao"
            );
}

function zoomSetorObras(){
    tdizoom.open(
            "get_papeis_obras",
            "Papel,Centro de Custo,CC,.", "Cod,Desc,Papel,CC",
            "Selecione um centro custo operacional",
            "Cod,"+user,
            "setorobra"
            );
}

function zoomModelo(){
    tdizoom.open(
            "get_modelo_nf",
            "codmodelo,Código,descricao,Modelo", "codmodelo,Código,descricao,Modelo",
            "Selecione um Modelo",
            "",
            "modelo"
            );
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

function setSelectedZoomItem(selectedItem) {
    var info = selectedItem.type.split("___");
    
    // ZOOM DE PAI X FILHO
    if (info.length > 1) {

		$("#rat_setor_nm___"+info[1]).val(selectedItem['Papel'].trim());
    	$("#centro_custo___"+info[1]).val(selectedItem['CC'].trim());    	
    	var papel = "liberar_"+selectedItem['Cod'];
		getAprovadores(papel,info[1]);
		$("#papel_aprovadores___"+info[1]).val(papel);
		var papelVP = "liberarvp_"+selectedItem['Cod'];
		getAprovadoresVp(papelVP,info[1]);
		$("#papel_aprovadores_vp___"+info[1]).val(papelVP);
		$("#nm_loja").val(selectedItem['Tipo']);
		getDespesas(info[1]);
    }else{
    	// ZOOM DE CAMPOS NORMAIS
		if (selectedItem.type == "setor"){
            $("#setor_nm" ).val(selectedItem['Papel']);
			$("#nm_gerente").val("Pool:Role:liberar_"+selectedItem['Cod']);
			$("#nm_loja").val(selectedItem['Tipo']);
		}else if(selectedItem.type == "natureza"){
			$("#conta_debito").val(selectedItem['contadebito']);
			$("#NatDespesa").val(selectedItem['descricao']);
			$("#codhistorico").val(selectedItem['codhistorico']);
			$("#conta_credito").val(selectedItem['contacredito']);
			var contacredito = $("#conta_credito").val();
			if((contacredito == "") || (contacredito == null) || (contacredito == "null")){
				$("#conta_credito").val("");
			}		
		}
		else if(selectedItem.type == "naturezaCr"){
			$("#conta_debito").val(selectedItem['contadebito']);
			$("#NatDespesa").val(selectedItem['descricao']);
			$("#codhistorico").val(selectedItem['codhistorico']);
			$("#conta_credito").val(selectedItem['contacredito']);
			var contacredito = $("#conta_credito").val();
			if((contacredito == "") || (contacredito == null) || (contacredito == "null")){
				$("#conta_credito").val("");
			}
				
		}else if(selectedItem.type == "contasmanutecao"){
			$("#conta_manut").val(selectedItem['status']);
			$("#tipoconta").val(selectedItem['desconta']);
				
		}else if(selectedItem.type == "setorobra"){
			$("#centrocustoobra").val(selectedItem['Papel']);
            $("#nm_obra").val("Pool:Role:requisicao_checkin_"+selectedItem['Cod']);
            
            var codigo = selectedItem['Papel'];
            codigo = codigo.substring(codigo.length - 6);
            $("#codcentrocusto").val(codigo);
				
		}else if(selectedItem.type == "modelo"){
			$("#COD_MODELO").val(selectedItem['codmodelo']);
			$("#modelo").val(selectedItem['descricao']);
		}else if(selectedItem.type == "empresaNf"){
			$("#NRO_EMPRESA").val(selectedItem['nroempresa']);
			$("#EMPRESA").val(selectedItem['nomereduzido']);
		}
		
    }
    	
}
