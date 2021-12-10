const knex = require("../database/connection");

//procura
const findAll = async function(req, res){
    const autores = await knex("autores");//para que o programa espere a consulta terminar 
    res.json(autores);
};
const findOne = async function(req, res){
  const autores = await knex("autores").where({id: req.params.id});//para que o programa espere a consulta terminar 
  res.json(autores);
};
  //adiciona
const create = async (req, res) => {
    const result = await knex("autores").insert(req.body);//para que o programa espere a consulta terminar 
    res.json(result);
  };
  //atualiza
const update = async (req, res) => {
    const result = await knex("autores")
    .where({id:req.params.id})
    .update(req.body);
    res.json(result);
  };
  //deleta
const destroy = async (req, res) => {
    const result = await knex("autores")
    .where({id:req.params.id})
    .delete(req.body);
    res.json(result);
  };

module.exports = {findAll, findOne, create, update, destroy};
  
  //req = require = requisiçao, res = response = resposta
  