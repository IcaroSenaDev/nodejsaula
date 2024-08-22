var http = require('http');
var dt = require ('./modulo1');
var url = require ('url');
var fs = require ('fs');

http.createServer(function(req,res){

        fs.readFile('index.html', function(err, data){

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("Data/Hora corrente: " + dt.myDateTime());
        var q = url.parse(req.url,true).query;
        var txt = q.year + " " + q.month;
        res.write(req.url);
        console.log('Modulo instalado com Sucesso!');
        res.write(data);
        res.write(txt);
        return res.end();
    });
}).listen(8080);


//TODAS AS ATIVIDADES FEITAS NA AULA DE HOJE: 22/08/2024