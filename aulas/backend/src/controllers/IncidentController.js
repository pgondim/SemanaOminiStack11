const connection = require('../database/connection');

module.exports = {

    //Criação do método que listará todos os itens da tabela incidents
    async index(request, response){

        // pega a pagina do request, se não existir coloca 1 no lugar
        const {page = 1} = request.query;

        // quando usamos uma variável entre colchetes [count] é a mais coisa de selecionar a primeira posição de um arry 
        // const count[0] = await connection('incidents').count();
        const [count] = await connection('incidents').count();
        response.header('X-Total-Count', count['count(*)']);

        // faz o select apenas de 5 elementos (limit(5)), caso tenha mais, ele pega o número da página e usa para calcular os próximos 5
        const incidents = await connection('incidents').
                                join('ongs','ongs.id','=','incidents.ong_id').
                                limit(5).
                                offset((page -1)*5).
                                select(['incidents.*',
                                        'ongs.nome',
                                        'ongs.email',
                                        'ongs.whatsapp',
                                        'ongs.nome',
                                        'ongs.cidade',
                                        'ongs.uf']);
    
        return response.json(incidents);
    },

    //Criação do método que criará novos incidents
    async create(request, response){
        //recebe do browser as informações
        const {title, description, value} = request.body;

        //usa o headers do envio para saber quem foi a ong que criou o incident
        const ong_id = request.headers.authorization;

        // como o ID de incidents é incremental, podemos recupera-lo colocando um array de 1 posição para receber o retorno que é o ID
        const [id] = await connection('incidents').insert({
            title, 
            description,
            value, 
            ong_id
        });

        return response.json({id});
    },

    //Criação do método que excluirá incidents
    async delete(request, response){

        const {id}   = request.params;
        const ong_id = request.headers.authorization;

        //procura do banco de dados o primeiro caso criado pelo id passado pelo usuário no browser
        const incident = await connection('incidents').
                               where('id',id).
                               select('ong_id').
                               first();

        //se o id de quem criou o caso (incident.ong_id) for diferente do id que está logado (ong_id) então o método retorna um erro de "Não Autorizado" (401)
        if (incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }

        //deleta efetivamente o caso dentro do BD
        await connection('incidents').where('id',id).delete();

        return response.status(204).send();
    }
}