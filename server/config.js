const nodemailer = require("nodemailer");

function sendData(user, pass, toMail, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
    from: user,
  });

  let mailOptions = {
    from: user,
    to: toMail,
    subject: "Сообщение от компании IMedia Solutions",
    html: message,
    attachments: [
      {
        filename: "brif-na-razrabotky-saita-imedia-solutions.docx",
        path: __dirname + "/file/brif-na-razrabotky-saita-imedia-solutions.docx",
      },
    ],
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
}

module.exports = { sendData };
