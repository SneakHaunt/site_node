module.exports = function(app){
	app.get("/formulario_inclusao_funcionario", function(req, res){
		app.app.controllers.admin.formulario_inclusao_funcionario(app, req, res);
	});

	app.post("/funcionario/inserir", function(req, res){
		app.app.controllers.admin.funcionario_inserir(app, req, res);
	});
}