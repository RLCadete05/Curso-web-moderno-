const moduloA = require("../../moduloA")
console.log(moduloA.bemVindo)

/*const saudacao = require("saudacao")
console.log(saudacao.bemVindo)*/

const http = require("http")
http.createServer((req, res) =>{
    res.write("Bom dia")
    res.end()
}).listen(8080)