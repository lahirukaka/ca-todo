const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 5000;
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./database');
require('./controllers/todo-controller')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})