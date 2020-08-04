const express = require('express')
const app = express()
const {json} = require('body-parser');
const {Word} = require('./word')

app.use(json())
 
app.get('/word', function (req, res) {
    Word.find({})
    .then(words => res.send({success : true , words}).end())
    .catch(error => res.send({success : false , message : error}).end())
    
})
app.post("/word" , (req , res) => {
    const {en , vn } = req.body
    if(en.trim() === '' || vn.trim() === ''){
        return res.send({success : false , message : "Emty value"}).end()
    }
    const newword = new Word({en , vn})
    newword.save()
    .then(w => res.send({success : true , word : w}).end())
    .catch(error => res.send({success : false , message : error}).end())
})
 
app.listen(3000)
