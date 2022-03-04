const { sharedSecret, apiKey } = require('../env.js');

const Bitskins = require('bitskins');

const bitskins = new Bitskins.API(
  process.env.BIT_TOKEN,
  process.env.BIT_SHARED
);
//const sockets = new BitSkins.WebSocket();
const bitskinsApi = {};

bitskinsApi.getAccountBalance = async () => {
  const result = await bitskins.getAccountBalance();
  return result;
};

bitskinsApi.getAllItemPrices = async () => {
  const result = await bitskins.getAllItemPrices();
  return result;
};

bitskinsApi.getAccountInventory = async () => {
  const result = await bitskins.getAccountInventory();
  return result;
};

bitskinsApi.getRawPriceData = async (hash_name) => {
  console.log('Start');
  const result = await bitskins.getRawPriceData(hash_name);
  console.log('result', result);
  return result;
};

module.exports = bitskinsApi;
