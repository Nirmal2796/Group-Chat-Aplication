const express = require('express');
const bodyParser = require('body-parser');

const loginRoutes = require('./routes/login');
const sendMessage = require('./routes/send_message');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoutes);
app.use(sendMessage);


app.listen(3000);



