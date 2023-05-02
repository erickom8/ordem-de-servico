//Importar bibliotecas
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

//Criando aplicação
const app = express()//Criou um servidor com API (vazia)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Erick_Cirico2208',
    database: 'synapse_os'
})
connection.connect()//Conexão entre o DB e o Back-End

app.use(cors({
    origin: '*'
}))

app.get('/synapse_os/instituicao', function(req, res){
    connection.query('SELECT * FROM instituicao', function(error, results){
        if(error)  {
           throw error;
        }
        else {
            res.send(results)
        }
    })
})


app.listen(9901, '0.0.0.0', function() {
    console.log('Aplicação rodando na porta 9901')
})
