const express = require('express')
const app = express()
 
app.get('/word', function (req, res) {
    const en = req.query.en
    const vn = req.query.vn
    res.send({en , vn})
})
 
app.listen(3000)
