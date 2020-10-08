const express = require('express')
const superheroes = require('superheroes')
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
app.get('/superheroes', function (req,res){
    res.send(superheroes.random());
} )
app.listen(3002, function() {
    console.info('Application is running locally on 3002')
})