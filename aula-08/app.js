/*************************************************
 * Objetivo: API para interagir com Bnaco de Dados
 * Data: 14/04/2023
 * Autor: Moreno
 * Versão: 1.0
 *************************************************/

 /*************************************************
    Para realizar a conexão com Banco de Dados iremos utilizar o PRISMA
    npm install prisma --save
    npx prisma
    npx prisma init
    npm install @prisma/client
 *************************************************/


 //Import das dependencias para criar a API

    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    
    //Cria o objetoapp utilizando a classe express
    const app = express();
    
    app.use((request, response, next)=>{
        //Permissões de origem da requisição
        response.header('Access-Control-Allow-Origin', '*');
        //Permissões de metodos que serão utilizados na API
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        //Define as permissões para o cors
        app.use(cors());
        //Continua para a leitura dos EndPoints
        next();
    });

    //CRUD (Create, Read, Update e Delete)

    /***************************
    * EndPoint: Tabela de aluno
    * Data: 14/04/2023
    * Versão: 1.0
    ***************************/

    //endPoint para retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){
    
    })
    //endPoint para retorna dados do aluno pelo ID
    app.get('/v1/lion-school/:id', cors(), async function(request, response){
    
    })
    //endPoint para inserir um novo aluno 
    app.post('/v1/lion-school/aluno', cors(), async function(request, response){
    
    })
    //endPoint para atualizar um alunno pelo 
    app.put('/v1/lion-school/:id', cors(), async function(request, response){
    
    })
    ///endPoint para excluir um aluno pelo ID
    app.delete('/v1/lion-school/;id', cors(), async function(request, response){
    
    })