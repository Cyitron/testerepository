const fs = require('fs');
const http = require('http');
const path = require('path');
const { PassThrough } = require('stream');

// Creat server objetc:
//http.createServer((req,res) => {
    //Write response
//    res.write('Hello Wrold');
//    res.end();
// })
// localhost:5000
//.listen(5000, () => console.log('Server running...'));

const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'HTMLs', 'home.html'), (err, content) => {
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         })
//         //res.end('<h1>Home</h1>'); //sintaxe html para o servidor no caminho '/'
//     };
    
//     if (req.url === '/api/users') {
//         const users = [
//             { nome: 'Fulano', idade: 20},
//             { nome: 'Siclano', idade: 21}
//         ];
//         res.writeHead(200, {'Content-Type': 'aplication/json'});
//         res.end(JSON.stringify(users)); //pq agora esta na sintaxe de js, preciso transformar a leitura do servidor em js!
//     }

// Fazendo paginas e caminhos de arquivo de forma dinamica!:
    let filePath = path.join(__dirname, 'HTMLs', req.url === '/' ? 'home.html' : req.url);

    // arquivo de extenção
    let extname = path.extname(filePath);

    // tipo de conteudo inicial:
    let contentType = 'text/html';

    // check ext and set content type:
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Ler arquivo:
    fs.readFile(filePath, (err, content) =>{
        if(err){
            if(err.code == 'ENOENT'){
                //Pagina não encontrada
                fs.readFile(path.join(__dirname, 'HTMLs', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            } else {
                // Outro erro qualquer:
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            } 
        } else {
            // SUCESSO
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});

console.log(filePath);

const PORT = process.env.PORT || 5000; //cria um "porto" caso não consiga ira usar o localhost:5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));