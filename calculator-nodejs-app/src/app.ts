import express, { request } from 'express';

const app = express();
const bodyParser = require("body-parser");
const port = 3000;

let lastCalc = []; // Array storing the calculations history

const cors = require('cors'); //Set CORS policy for the app
app.use(cors()); 
app.options('*', cors());

app.use(bodyParser.json()); // Body parser for post messages
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

/*
Endpoint to record the new calculation
*/
app.post('/calc', async function (req, res) {
  try {
    lastCalc.unshift(req.body.calculation);
    lastCalc = lastCalc.slice(0,10);
    res.json({"status":"Completed"});
  } catch (err) {
    console.log(err);
    res.send(err);
  }
})

/*
Endpoint to listen to changes in the calculations, the last 10 are returned
*/
app.get('/listen', async function (req, res) {
  res.send(lastCalc.slice(0,10));
})

