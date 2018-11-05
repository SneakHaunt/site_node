module.exports= function(app){
/* Fora de uso, era utilizado pelo modal.
	app.post('/formulario_alterar', function(req, res){		
		var id = req.body.id;
		
		var conexao = app.config.dbConnection();

		var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

		funcionarioDAO.getFuncionario(id, function(error, result){
			res.render('administrador/formulario_alterar_funcionario', {funcionario: result});
		});	
	});
*/
	app.post('/alterar', function(req, res){
		app.app.controllers.alterar.alterar(app, req, res);
	});


	app.get('/formulario_alterar', function(req, res){
		app.app.controllers.alterar.formularioPreenchido_alterar(app, req, res);
	});
};