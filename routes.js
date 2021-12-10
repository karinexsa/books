const express = require("express");
const router = express.Router();
const knex = require("./database/connection");//fazendo importaçao do knex
const LivrosController = require("./controllers/livros");
const AutoresController = require("./controllers/autores");


//metodo CRUD - CREATE READ UPDATE DELETE
router.get("/livros", LivrosController.findAll);//le tabela
router.get("/livros:id", LivrosController.findOne);
router.post("/livros", LivrosController.create);//cria/adiciona
router.patch("/livros/:id", LivrosController.update);//atualiza itens
router.delete("/livros/:id", LivrosController.destroy);//apaga itens

router.get("/autores", AutoresController.findAll);
router.get("/autores:id", AutoresController.findOne);
router.post("/autores", AutoresController.create);  //adiciona itens
router.patch("/autores/:id", AutoresController.update);
router.delete("/autores/:id", AutoresController.destroy);

  
  module.exports = router;