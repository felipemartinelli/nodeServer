var express = require("express");

var server = express();

var listaDeAlunos;
listaDeAlunos = '{"nome":"Professor Isidro","email":"isidro@isidrocorp.com", "nota":10}';
var listaDeFuncs = [{"id":1,"nome":"Professor Isidro","endereco":"rua x","numero":1},
                    {"id":2,"nome":"Felipe","endereco":"rua y", "numero":2},
                    {"id":3,"nome":"Thiago","endereco":"rua w", "numero":3},
                    {"id":4,"nome":"Jose","endereco":"rua z", "numero":4}];

server.get('/teste', function(req, res){
    console.log("Browser acessou o caminho /Hello")
    res.send(listaDeAlunos);

});


server.get('/funcionarios/:id', function(req, res){
    var id = req.params.id;
    if(id <= 0 || id >2){
        res.json({"resultado":"funcionario nao encontrado"});
    }
    else{
        res.json(listaDeFuncs[id-1]);
    }
})

server.get('/funcionarios', function(req,res){
    console.log("Recuperar a lista inteira");
    res.json(listaDeFuncs);
})

server.listen(3000,function(){
    console.log("Servidor rodando na porta 3000");
});