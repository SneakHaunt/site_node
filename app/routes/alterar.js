module.exports= function(app){

	app.post('/formulario_alterar', function(req, res){		
		var id = req.body.id;
		
		var conexao = app.config.dbConnection();

		var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

		funcionarioDAO.getFuncionario(id, function(error, result){
			res.render('administrador/formulario_alterar_funcionario', {funcionario: result});
		});	
	});

	app.post('/alterar', function(req, res){
		var conexao = app.config.dbConnection();

		var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

		var funcionario = req.body;
		
		funcionarioDAO.alterarFuncionario(funcionario);

		res.redirect('/');
	});
};