import pkg  from "express";
import express from 'express'
import "dotenv/config.js"
import nodemailer from 'nodemailer';
import lookup  from'country-code-lookup';
import router  from '../routes/user.js';
import bodyParser from 'body-parser';
import path from 'path'
import '../config/db.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {json} = pkg
const app = express();
app.use(json());

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);
app.get('/', function (req, res) {
    res.send('Welcome to our Node Incredibles!')
})

app.get('/users', function (req, res) {
    res.send('Users will appear here')
})
app.get('/watches', function (req, res) {
    res.send('NEw watches coming soon!')
})
app.get('/country', (req,res) => {
    const filePath = path.resolve(__dirname + '/..'+ '/public/country.html')
    res.sendFile(filePath);
})
app.post('/country', (req,res) => {
    let countryName = String(req.body.country);
    let countryResult = lookup.byCountry(countryName);
    res.set("Content-Type", "text/html");
    res.write('<h3>Country Searched: ' + countryResult.country + '</h3>');
    res.write("<h3>Continet:"  + countryResult.continent + '</h3>');
    res.write("<h3>Region: " + countryResult.region + '</h3>');
    res.write("<h3>Capital City: " + countryResult.capital + '</h3>');
    res.write("<h3>Iso 2 code: " + countryResult.iso2 + '</h3>');
    res.write("<h3>Iso 3 code: " + countryResult.iso3 + '</h3>');
    res.send();
})

app.get('/mail', function (req, res){
    //cre
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
            res.send('Email sent: ' + message.to);
            console.info("Email sent")
        }
    });

})
const port = process.env.PORT;
app.listen(port || 4000, function () {
  console.info(`Application is running locally on ${port}`);
});
