const express = require('express')
const bodyParser = require('body-parser');
const lookup = require('country-code-lookup');
const app = express()
app.use(bodyParser.urlencoded({extended: true}));

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
    res.sendFile(__dirname + '/country.html');
})
app.post('/country', (req,res,error) => {
    let countryName = String(req.body.country);
    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
    let countryResult = lookup.byCountry(countryName); 
        try{
        res.set("Content-Type", "text/html");
        res.write('<h3>Country Searched: ' + countryResult.country + '</h3>');
        res.write("<h3>Continet:"  + countryResult.continent + '</h3>');
        res.write("<h3>Region: " + countryResult.region + '</h3>');
        res.write("<h3>Capital City: " + countryResult.capital + '</h3>');
        res.write("<h3>Iso 2 code: " + countryResult.iso2 + '</h3>');
        res.write("<h3>Iso 3 code: " + countryResult.iso3 + '</h3>');
        res.send();
        }
        catch(err){
            res.send("Please enter a valid country name");
        }
})
app.listen(3002, function() {
    console.info('Application is running locally on 3002')
})