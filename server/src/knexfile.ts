// Update with your config settings.
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
      directory: "./src/db/migrations"
    },
    seeds: {
      directory: "./src/db/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

export = knex;
