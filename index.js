const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const getToken = require('./services/getToken');
const bitskins = require('./services/bitskins');
const auth = require('./routes/auth');
const users = require('./routes/users');
const mongoose = require('mongoose');
const winston = require('winston');
const bitskinsAccount = require('./bitskins_login/index');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/token', (req, res) => {
  res.json(getToken());
});

app.get('/api/balance', async (req, res) => {
  res.json(await bitskins.getAccountBalance());
});

app.get('/api/allItems', async (req, res) => {
  res.json(await bitskins.getAllItemPrices());
});

app.get('/api/getAccountInventory', async (req, res) => {
  res.json(await bitskins.getAccountInventory());
});

app.get('/api/getRawPriceData/:hash_name', async (req, res) => {
  console.log(req.params.hash_name);
  res.json(await bitskins.getRawPriceData(req.params.hash_name));
});

app.use('/api/users', users);
app.use('/api/auth', auth);
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => winston.info(`Connected to DB...`));

app.listen(9005, () => {
  console.log('Node server started on port 9005.');
});

//bitskinsAccount.getAccountBalance();
