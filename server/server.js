import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

//Accessing packages
const app = express();
const port = 5000;
dotenv.config();

//Accessing email
import sendEmail from './mailer';

//Requesting database
import data from './data';
import config from './config';
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).catch((error) => console.log(error.reason));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTING
//Importing routes
import userRoute from './routes/userRoutes';

//Users routing
app.use("/api/users", userRoute);

//Products routes
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(item => item.product_id === productId);
  if(product) {
    res.send(product);
  } else {
    res.status(404).send({msg: "Products does not exist."});
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send('Server is running!');
});

//Mailer route
app.post('/api/email', (req, res) => {
  const {subject, email, text} = req.body;
  console.log('Email: ', req.body);
  sendEmail(email, subject, text, function(error, contactData) {
    if(error) {
      res.status(500).send({
        msg: 'Internal errror'
      });
    } else {
      res.status(201).send({
        msg: 'Email sent!'
      });
    }
  })
})

//App listening to PORT
app.listen(port, () => {
  console.log(`MERN-shop (server side) is listening on Port: ${port}.`)
});