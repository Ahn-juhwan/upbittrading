const { Sequelize, DataTypes } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.serialNumber = require("../models/serialNumber")(sequelize, DataTypes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected Database mariadb.");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
