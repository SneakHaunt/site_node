module.exports = function(app){
		app.get("/formulario_inclusao_funcionario", function(req, res){
			res.render("administrador/formulario_inclusao_funcionario");
		});

		app.post("/funcionario/inserir", function(req, res){
			var formulario = req.body;

			var conexao = app.config.dbConnection();

			var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

			funcionarioDAO.inserirFuncionario(formulario, function(error, result){
					res.redirect('/funcionarios');
			});
		});
}