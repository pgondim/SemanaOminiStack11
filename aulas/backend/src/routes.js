const express = require('express');

//importa o arquivo OngController.js para que possamos usar seus métodos
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/* ---------------------- Inicio: Rotas Session ---------------------- */

routes.post('/session', SessionController.create);

/* ----------------------- Fim:  Rotas Session ----------------------- */

/* ------------------------ Inicio: Rotas Ong ------------------------ */

//chama o método de listar todas as ongs
routes.get('/ongs', OngController.index);

//chama o método de inserir novas ongs no banco de dados
routes.post('/ongs', OngController.create);

/* ---------------------- Fim:  Rotas Incidents ---------------------- */

/* ---------------------- Inicio: Rotas Profile ---------------------- */

routes.get('/profile', ProfileController.index);

/* ----------------------- Fim:  Rotas Profile ----------------------- */

/* --------------------- Inicio:  Rotas Incidents -------------------- */

//chama o método de listar todos os casos
routes.get('/incidents', IncidentController.index);

//chama o método para inserir novos casos
routes.post('/incidents',IncidentController.create);

//chama função que deleta um caso especifico
routes.delete('/incidents/:id',IncidentController.delete);

/* ---------------------- Fim:  Rotas Incidents ---------------------- */

//exporta esse documento para o index.js
module.exports = routes;


