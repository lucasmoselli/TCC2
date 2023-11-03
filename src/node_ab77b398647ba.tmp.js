const express = require('express')
const connection = require('./database')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/query', function (req, res) {
    // let sql = "SELECT * FROM dados_cp WHERE time_stamp >= DATE_SUB(NOW(), INTERVAL 1 DAY) - INTERVAL 1 HOUR AND time_stamp <= DATE_SUB(NOW(), INTERVAL 0 DAY) - INTERVAL 1 HOUR"

    let sql = "SELECT * FROM dados_cp"
    connection.query(sql, function (err, results) {
        if (err) {
            console.error('Algo deu errado', err)
        }

        res.send(results)
    })
})

app.get('/query2', function (req, res) {
    let sql = "SELECT * FROM dados_cp WHERE time_stamp >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND time_stamp < DATE_SUB(CURDATE(), INTERVAL 1 MONTH);"

    connection.query(sql, function (err, results) {
        if (err) {
            console.error('Algo deu errado', err)
        }

        res.send(results)
    })
})


app.get('/query3', function(req, res){
    let sql = "SELECT * FROM dados_diarios_cp"
    
    connection.query(sql, function(err, results){
        if(err){
            console.error('Algo deu errado', err)
        }

        res.send(results)
    })
})


app.listen(3000, function () {

    connection.connect(function (err) {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            return;
        }
        console.log('Conectado ao banco de dados MySQL!');
    });

})