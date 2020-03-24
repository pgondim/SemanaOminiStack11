const express = require('express');
const routes = require('./routes');

const app = express();

//faz com que o express converta o JSON enviado para um tipo entendivel para aplicação
app.use(express.json());

// usa rotas provenientes do arquivo routes.js
app.use(routes);


app.listen(3333);


 