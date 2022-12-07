import app from "./src/app.js"

//const http = require("http");
//const port = 3000;

const port = process.env.PORT || 3000;

/*const rotas = {
  "/": "Curso de Node",
  "/livros": "Entrei na página de livros",
  "/autores": "Listagem de autores",
  "/editora": "Página de editora"
}*/

/*const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(rotas[req.url]);
})*/

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})


