
exports.up = function(knex) {//executada quando roda o comandos de migraçoes
  return knex.schema.createTable("livros", (table) => {
    table.increments().primary();
    table.string("nome");
    table.string("descricao");
    table.integer("ano");
    table.string("imagem");
    table.integer("autor_id").references("autores.id");//criando relacionamento 
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {//funcao para apagar
    return knex.schema.dropTable("livros");
  
};
