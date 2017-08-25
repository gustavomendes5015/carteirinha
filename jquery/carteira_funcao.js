window.onload = function(){
	$("#colegios").focus();
	$("#nome_mae").val('');
	$("#nome_crianca").val('');
	$("#sobrenome_mae").val('');
	$("#sobrenome_crianca").val('');
	$("#rg").val('');
	$("#cpf").val('');
	$("#data_inicio").val('');
	$("#data_fim").val('');
	
	$( "#formulario_carteira" ).submit(function(e) {
		var colegio = $("select#colegios option:checked" ).text();
		var mae = $("#nome_mae").val().toUpperCase();
		var crianca = $("#nome_crianca").val().toUpperCase();
		var sobrenome_mae = $("#sobrenome_mae").val().toUpperCase();
		var sobrenome_crianca = $("#sobrenome_crianca").val().toUpperCase();
		var rg = $("#rg").val().toUpperCase();
		var cpf = $("#cpf").val().toUpperCase();
		var data_inicio = $("#data_inicio").val().toUpperCase();
		var data_fim = $("#data_fim").val().toUpperCase();
		
		localStorage.setItem('colegio', colegio);
		localStorage.setItem('mae', mae);
		localStorage.setItem('crianca', crianca);
		localStorage.setItem('sobrenome_mae', sobrenome_mae);
		localStorage.setItem('sobrenome_crianca', sobrenome_crianca);
		localStorage.setItem('rg', rg);
		localStorage.setItem('cpf', cpf);
		localStorage.setItem('data_inicio', data_inicio);
		localStorage.setItem('data_fim', data_fim);
	});
}