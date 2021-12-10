const knex = require("../database/connection");

//procura
const findAll = async (req, res) => {
    const livros = await knex("livros");//para que o programa espere a consulta terminar 
    res.json(livros);
  };
const findOne = async (req, res) => {
    const livros = await knex("livros").where({id: req.params.id});//para que o programa espere a consulta terminar 
    res.json(livros);
  };
//cria/adiciona
  const create = async (req, res) => {
    const result = await knex("livros").insert(req.body);//para que o programa espere a consulta terminar 
    res.json(result);
  };
  //atualiza
  const update = async function (req, res) {
    const result = await knex("livros")
    .where({id:req.params.id})
    .update(req.body);
    res.json(result);
  };
  //deleta
  const destroy = async (req, res) => {
    const result = await knex("livros")
    .where({id:req.params.id})
    .delete(req.body);
    res.json(result);
  };

  module.exports = {findAll, findOne, create, update, destroy};
    //req = require = requisiçao, res = response = resposta
