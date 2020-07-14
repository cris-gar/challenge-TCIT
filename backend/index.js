const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const postRoutes = require('./routes/postRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', postRoutes);

app.listen(9000);