module.export = {
  development: {
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    host: process.env.MARIADB_HOST,
    dialect: "mariadb",
  },
  test: {
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    host: process.env.MARIADB_HOST,
    dialect: "mariadb",
  },
  production: {
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    host: process.env.MARIADB_HOST,
    dialect: "mariadb",
  },
};
