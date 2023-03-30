const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const users = require('./routes/userRoute');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const mongoose = require("mongoose")
const connectdatabase =()=>{
    mongoose.connect('mongodb+srv://ankush:ankush2003@ankush.9quzp.mongodb.net/ADAT?retryWrites=true&w=majority').then((data)=>{
    console.log(`mongodb connected wiht server ${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})
}
module.exports =connectdatabase
app.use('/api/v1',users);
app.listen(port, () => {
console.log("server is running on port ",port);
})

