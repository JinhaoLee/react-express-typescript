type Knex = { [key: string]: {} };

const knex: Knex = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "password",
      database: "web_computing"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "../db/migrations"
    },
    seeds: {
      directory: "../db/seeds"
    }
  },

  production: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Cab230!",
      database: "web_computing"
    }
  }
};

export = knex;
