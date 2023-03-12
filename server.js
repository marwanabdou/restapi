const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

const app = express();
//middlewares
app.use(bodyParser.json());
app.use(cors());

//IMPORT ROUTES
const userRoute = require('./routes/users');
app.use('/user', userRoute) 

//ROUTES
app.get('/', (req,res) => {
    res.send("We are home");
});


//LISTEN TO THE SERVER
app.listen(3000);

//connect to mongoose 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


