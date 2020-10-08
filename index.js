const express = require('express')
const fs= require('fs')
// read file
fs.readFile('./blog.text',(err,data)=>{
    if (err){
        console.log(err)
    }else{
        console.log(data.toString)
    }
})
// write file
fs.writeFile('./blog1.text','Happy coding!',()=>{
   console.log('File was written')
})
//delete a file

if(fs.existsSync('./blog2.text')){
    fs.unlink('./blog2.text',(err)=>{
        if (err){
            console.log(err)
        }else{
            console.log('file deleted!')
        }
    })
}

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