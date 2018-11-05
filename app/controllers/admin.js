module.exports.formulario_inclusao_funcionario = function(app, req, res){
	res.render("administrador/formulario_inclusao_funcionario",{impedimentos:{}, funcionario: {}});
}

module.exports.funcionario_inserir = function(app, req, res){
	var formulario = req.body;

	req.assert('nome','Nome é obrigatório').notEmpty();
	req.assert('cargo','Cargo é obrigatório').notEmpty();
	req.assert('cpf','CPF é obrigatório').notEmpty();
	req.assert('dataNascimento','Data de nascimento é obrigatório').notEmpty();
	req.assert('email','Email é obrigatório').notEmpty();
	req.assert('telefone',' Telefone é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("administrador/formulario_inclusao_funcionario",{impedimentos: erros, funcionario : formulario});
		return;
	}

	var conexao = app.config.dbConnection();

	var funcionarioDAO = new app.app.models.FuncionarioDAO(conexao);

	funcionarioDAO.inserirFuncionario(formulario, function(error, result){
		res.redirect('/funcionarios');
	});
}