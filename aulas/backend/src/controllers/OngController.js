const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {

    //Criação do método que listará todos os itens da tabela ong
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    //Criação do método para criar ongs dentro da tabela
    async create(request, response){
        const {nome, email, whatsapp, cidade, uf} = request.body;

        //Gera um id hexadecimal de 4 digitios aleatorio usando o crypto
        const id = crypto.randomBytes(4).toString('HEX');

        // como a função é assincrona, aguardamos(await) o bloco de codigo terminar sua execução pra depois continuar o script
        await connection('ongs').insert({
            id,
            nome, 
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({id});
    }
};