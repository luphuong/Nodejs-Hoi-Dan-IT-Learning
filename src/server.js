const express = require('express')
const path = require('path');
const { config } = require('process');
const app = express()
require('dotenv').config();
const port = process.env.PORT;
const configViewEngine = require('./config/viewEngine');



configViewEngine(app);
app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}/ `)
})