const express = require('express');
const fs = require('fs');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.send(
        `<p>${fs.readFileSync('./chat')}</p>
        <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
        method = "POST"> 
        <input id="username" type="hidden" name="username">
        <input type="text" name="message">
        <button type="submit">SEND</button></form>`
    )
})

router.post('/', (req, res, next) => {
    fs.appendFileSync('./chat', req.body.username+":"+req.body.message + " ");
    res.redirect('/');
})








module.exports = router;