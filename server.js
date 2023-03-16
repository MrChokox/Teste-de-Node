const http = require("http");

http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(req.url === '/Produto'){
        res.end(JSON.stringify({
            data: 'Rota de Produtos'
        }))
    }

    if(req.url === '/Usuarios'){
        res.end(JSON.stringify({
            data: 'Rota de Usuarios'
        }))
    }

    res.end(JSON.stringify({
        data: 'Rota não mapeada'
    }))
    
}).listen(4001, () => {console.log("Servidor rodando na porta 4001")});