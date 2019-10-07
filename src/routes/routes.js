
var express = require('express')
var app = express()

app.post('/api/login', function(req, res){
    console.log("Acesso a aplicação")

    

    if (err) {
        res.send(err)
        res.json(login)
    }
})

app.get('/api/home', function(req, res) {
    console.log("Acesso a pagina principal")

    if (err) {
        res.send(err)
        res.json(home)
    }
})