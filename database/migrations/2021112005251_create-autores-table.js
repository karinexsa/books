
exports.up = function(knex) {//executada quando roda o comandos de migraçoes
    return knex.schema.createTable("autores", (table) => {
      table.increments().primary();
      table.string("nome"); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {//funcao para apagar
      return knex.schema.dropTable("autores");
    
  };
  