const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

//Authenticator
const auth = {
  auth: {
    api_key: 'api_key',
    domain: 'domain'
  }
};

//Mailing setup
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text) => {
  const mailOptions = {
    from: email,
    to: 'lucaszuch@outlook.com',
    subject: subject,
    text: text
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(error, contactData) {
      if(error) {
        console.log('Ops! I did it again!');
        reject(error);
      }
      console.log('Email sent!');
      resolve(contactData);
      });
  });
};

module.exports = sendMail;