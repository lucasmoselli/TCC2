const express = require('express')
const connection = require('./database')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/query', function(req, res){
    let sql = "SELECT * FROM dados_cp"
    connection.query(sql, function(err, results){
        if(err){
            console.error('Algo deu errado', err)
        }
        
        res.send(results)
    })
})

app.listen(3000, function(){

    connection.connect(function(err) {
        if (err) {
          console.error('Erro ao conectar ao banco de dados:', err);
          return;
        }
        console.log('Conectado ao banco de dados MySQL!');
      });
    
})