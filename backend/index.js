const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const postRoutes = require('./routes/postRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', postRoutes);

app.listen(3000);