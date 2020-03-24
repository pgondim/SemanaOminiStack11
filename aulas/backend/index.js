const express = require('express');

const app = express();

//faz com que o express converta o JSON enviado para um tipo entendivel para aplicação
app.use(express.json());

/* Métodos HTTP:
 - GET:    buscar (pegar) uma informação do back-end
 - POST:   criar uma informação no back-end
 - PUT:    alterar uma informação no back-end
 - DELETE: deleta uma informação no back-end
 */

/*Tipos de parâmetros:

- Query:        parâmetros nomeados na rota após o ? (Filtros, paginação)
- Route Params: parâmetros utilizados para identificar recursos
- Request Body: corpo da requisição utilizado para criar ou alterar recursos

*/

// request: guarda todos os dados enviados pela requisição do usuário.
// response: retorna um tipo de resposta para o usuário
app.post('/users', (request,response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Pedro Gondim'
    });
} );

app.listen(3333);


 