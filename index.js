const express = require('express')
const nodemailer = require('nodemailer');

const app = express()

app.get('/', function (req, res) {
    res.send('Welcome to our Node Incredibles!')
})

app.get('/users', function (req, res) {
    res.send('Users will appear here')
})
app.get('/watches', function (req, res) {
    res.send('NEw watches coming soon!')
})
app.listen(3002, function() {
    console.info('Application is running locally on 3002')
})

app.get('/mail', function (req, res){
    // Testing email

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "guyntare745@gmail.com",
            pass: "test@123!"
        }
    });

    const message = {
        from: 'guyntare745@gmail.com',
        to: 'samuel.nishimwe@andela.com',
        subject: 'Sending email with node.js',
        text: 'Good morning Samuel, I just sent you this email in node.js tbh this is lit :)'
    };

    transporter.sendMail(message, function(error, info){
        if (error){
            console.log(error);
        }else{
            res.send('Email sent: ' + info.response);
            console.info("Email sent")
        }
    });

})