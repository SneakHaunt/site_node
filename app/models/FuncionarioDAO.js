function FuncionarioDAO(conexao){
	this._conexao = conexao;
}

FuncionarioDAO.prototype.getFuncionarios = function(callback){
	this._conexao.query('select *, DATE_FORMAT(dataNascimento,"%d/%m/%Y") as dataNascimento from tbfuncionario', callback);
}

FuncionarioDAO.prototype.getFuncionario = function(funcionario, callback){
	this._conexao.query('select *, DATE_FORMAT(dataNascimento,"%Y-%m-%d") as dataNascimento from tbfuncionario where id = ?', [funcionario], callback);
}

FuncionarioDAO.prototype.deletarFuncionario = function(id, callback){
	this._conexao.query('delete from tbfuncionario where id = ?', id);
}

FuncionarioDAO.prototype.inserirFuncionario = function(funcionario, callback){
	this._conexao.query('insert into tbfuncionario set ?', funcionario, callback);
}

FuncionarioDAO.prototype.alterarFuncionario = function(funcionario){
	var sql = "update tbfuncionario set nome = ?, email = ?, dataNascimento = ?, cargo = ?, telefone = ?, cpf = ? where id = ?";
	this._conexao.query(sql, 
		[
		funcionario.nome,
		funcionario.email,
		funcionario.dataNascimento,
		funcionario.cargo,
		funcionario.telefone,
		funcionario.cpf,	
		parseInt(funcionario.id)
		], function(err, result){
			console.log("Gravado");
			console.log("erro: "+ err);
		});
}

module.exports = function(){
	return FuncionarioDAO;
}