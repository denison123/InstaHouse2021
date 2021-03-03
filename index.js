const express = require('express');
const Sequelize = require('sequelize');
const config = require('./config/config')

const app = express();
app.get('/movies', async (req,res)=>{
    const conexao = new Sequelize(config)

    const resultadoFilmes = await conexao.query('select * from movies')
})

  
app.listen(8080, () => console.log("Serv funcionando"))