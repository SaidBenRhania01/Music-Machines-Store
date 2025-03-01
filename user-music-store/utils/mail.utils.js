const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

const sendEmail = async (dto) => {
  const { sender, receipients, subject, message } = dto;

  return await transport.sendMail({
    from: sender,
    to: receipients,
    subject,
    html: dto.isHtml ? message : undefined,
    text: !dto.isHtml ? message : undefined,
  });
};

module.exports = { sendEmail };
