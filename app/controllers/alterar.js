module.exports.formularioPreenchido_alterar = function(app, req, res){
	var id = req.query;

	var conexao = app.config.dbConnection();

	var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

	funcionarioDAO.getFuncionario(id, function(error, result){
		res.render('administrador/formulario_alterar_funcionario', {impedimentos: {}, funcionario: result});
	});	
}

module.exports.alterar = function(app, req, res){
	var funcionario = [req.body];	

	req.assert('nome','Nome é obrigatório').notEmpty();
	req.assert('cargo','Cargo é obrigatório').notEmpty();
	req.assert('cpf','CPF é obrigatório').notEmpty();
	req.assert('dataNascimento','Data de nascimento é obrigatório').notEmpty();
	req.assert('email','Email é obrigatório').notEmpty();
	req.assert('telefone',' Telefone é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("administrador/formulario_alterar_funcionario",{impedimentos: erros, funcionario : funcionario});
		return;
	}

	var conexao = app.config.dbConnection();
	var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);
	funcionarioDAO.alterarFuncionario(funcionario[0]);

	res.redirect('/');
}