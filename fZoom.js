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
