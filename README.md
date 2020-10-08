# NODEMAILER

Foobar is a Python library for dealing with word pluralization.

## Installation

Installation of Nodemailer.
Use the package manager [npm](https://www.npmjs.com/package/nodemailer) to install nodemailer.

```bash
npm install nodemailer
```

## Usage

```javascript

// # import nodemailer
const nodemailer = require('nodemailer');

//create transporter of the send email
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});
//crete message which will contain the format the email and the text to be sent
var message = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy, just send the email text here!'
};

//Now we call the transporter to send the message
transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent to: ' + message.to);
  }
});
```
