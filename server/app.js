const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const users = require('./routes/userRoute');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const mongoose = require("mongoose")
mongoose
  .connect('mongodb://0.0.0.0:27017')
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.use('/api/v1',users);
app.listen(port, () => {
console.log("server is running on port ",port);
})

