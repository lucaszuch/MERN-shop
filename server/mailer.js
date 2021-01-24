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

const sendMail = (email, subject, text, callback) => {
  const mailOptions = {
    from: email,
    to: 'lucaszuch@outlook.com',
    subject: subject,
    text: text
  };
  
  transporter.sendMail(mailOptions, function(error, contactData) {
    if (error) {
      callback(error, null);
      console.log('Ops! I did it again!!');
    } else {
      callback(null, contactData);
      console.log('Message sent!')
    }
  });
};

module.exports = sendMail;