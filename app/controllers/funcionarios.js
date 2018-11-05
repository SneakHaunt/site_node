module.exports.getFuncionarios = function(app, req, res){
	var conexao = app.config.dbConnection();

	var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);
	
	funcionarioDAO.getFuncionarios(function(error, result){
		res.render('funcionarios/funcionarios', {funcionario : result});
	});
}

module.exports.deletarFuncionario = function(app, req, res){
	var conexao = app.config.dbConnection();
	var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);
	var id = req.body.id;
	funcionarioDAO.deletarFuncionario(id);
}