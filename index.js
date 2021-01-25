const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index')
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);
app.use(express.static(path.join(__dirname, "assets")));

app.use("/", indexRouter);
app.listen(3000); //3000, 5000, 8000, 8080
console.log('the server is running on http://localhost:3000');