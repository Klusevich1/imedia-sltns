const express = require("express");
const fs = require("fs");
const path = require("path");
const ORDER = require("../server/database/models/order");
const { sendData } = require("./config");

const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/order", (req, res) => {
  ORDER.findAll()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Произошла ошибка при получении данных");
    });
});

app.post("/order", (req, res) => {
  const { name, email, price, selectedVariants } = req.body;
  console.log(selectedVariants)
  let htmlString = selectedVariants
          .map(
            (item) =>
              `
            <div class="order">
              <h4>${item.text}</h4>
              <h4>${item.price.toLocaleString("ru-RU")}</h4>
            </div>
          `
          )
          .join("");
  const message = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .welcome-message {
                color: #2c3e50;
                font-size: 22px;
            }
            .user-data {
                background-color: #ecf0f1;
                padding: 20px;
                margin-top: 20px;
            }
            .line {
              height: 1px;
              width: 100%;
              background-color: #000;
            }
            .order {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
        </style>
    </head>
    <body>
        <h1 class="welcome-message">Уважаемый клиент!</h1>
        <div class="user-data">
            <h2>Ваши данные:</h2>
            <h4>Имя и Фамилия: ${name}</h4>
            <h4>Email: ${email}</h4>
            <h4>Расчитанная стоимость: ${price.toLocaleString("ru-RU")} руб.</h4>
            <div class="line"></div>
            <div>
              ${htmlString}
            </div>
        </div>
        <div>
            <p>Cпасибо за то, что выбрали нашу компанию для разработки вашего проекта. Мы ценим ваше доверие и возможность сотрудничества с нами.</p>
            <p>Мы стремимся предоставить вам наилучший сервис и результат, поэтому высылаем вам нашу бриф-анкету. Это поможет нам создать индивидуальное и точное предложение, отвечающее требованиям вашего проекта.</p>
            <p>Заполните бриф-анкету и отправьте нам обратно. Будьте уверены, что все предоставленные вами данные будут обрабатываться конфиденциально и использоваться исключительно для целей проекта.</p>
            <p>Если у вас возникнут вопросы или вам потребуется дополнительная информация, пожалуйста, не стесняйтесь обращаться к нам. Мы всегда готовы помочь и ответить на все ваши вопросы.</p>
            <p>
              С наилучшими пожеланиями, <br>Команда iMedia Solutions
            </p>
        </div>
    </body>
    </html>`;
  sendData("imediasolutions@mail.ru", "WDDBj7n1QUWvGNNpjfdL", email, message)
    .then((response) => console.log(`Письмо успешно отправлено: ${response}`))
    .catch((error) => console.log(`Ошибка при отправке письма: ${error}`));
  ORDER.create({
    name: name,
    email: email,
    price: price,
  })
    .then(() => {
      console.log(`Пользователь ${name} успешно создан.`);
      res.status(200).send("Данные получены и записаны в базу данных");
    })
    .catch((err) => {
      console.error("Ошибка при создании пользователя:", err);
      res.status(500).send("Произошла ошибка при записи данных в базу данных");
    });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
