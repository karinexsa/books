
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('autores').del()//limpa a tabela antes de preencher
    .then(function () {
      // Inserts seed entries
      return knex('autores').insert([
        {nome: "Mário de Andrade"},
        {nome: "Machado de Assis"},
        {nome: "Graciliano Ramos"},
        {nome: "João Guimarães Rosa"},
        {nome: "Rachel de Queiroz"}
      ]);
    });
};
