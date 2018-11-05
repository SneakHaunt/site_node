module.exports = function(app){
	app.get("/funcionarios", function(req, res){
		app.app.controllers.funcionarios.getFuncionarios(app, req, res);
	});

	app.post("/funcionarios", function(req, res){
		app.app.controllers.funcionarios.deletarFuncionario(app, req, res);
	});
}