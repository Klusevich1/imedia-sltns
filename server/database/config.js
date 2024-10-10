const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("IMEDIA", "sa", "sa", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Соединение установлено успешно.");
  })
  .catch((err) => {
    console.error("Ошибка соединения:", err);
  });

module.exports = sequelize;
