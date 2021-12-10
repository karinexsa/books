// Update with your config settings.

module.exports = {

  development: {//desenvolvimento
    client: 'sqlite3',
    connection: {
      filename: './database/db.sqlite',
    },
    migrations: {//tabelas e relacionamentos
      directory: './database/migrations',
    },
    useNullAsDefault: true, //usando nulo sempre que nao preencher um campo
    pool: {
      afterCreate: function(conn, done){
        conn.run("PRAGMA foreign_keys = ON", done);//comando para o sqlite ligar o controle de chaves estrangeiras
      }
    },
    seeds: {//sementes. dados pertencentes as tabelas
      directory: './database/seeds',
    }
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false},
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
