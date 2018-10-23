module.exports = function(app){

	app.get("/funcionarios", function(req, res){

		var conexao = app.config.dbConnection();

		var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

		funcionarioDAO.getFuncionarios(function(error, result){
			res.render('funcionarios/funcionarios', {funcionario : result});
		});

		app.post("/funcionarios", function(req, res){
			var conexao = app.config.dbConnection();
			var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);
			var id = req.body.id;
			funcionarioDAO.deletarFuncionario(id);
		});


	});

}