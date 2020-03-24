const express = require('express');
const routes = express.Router();

// request: guarda todos os dados enviados pela requisição do usuário.
// response: retorna um tipo de resposta para o usuário
routes.post('/users', (request,response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Pedro Gondim'
    });
} );

module.exports = routes;


