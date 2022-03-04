const { generateTotp, base32Decode } = require('../utils/common.js');

let apikey = process.env.APIKEY;
require('dotenv').config();
function getCode() {
  return generateTotp(base32Decode(process.env.SHAREDSECRET));
}

function getToken() {
  console.log('apikey', apikey);
  return { code: getCode(), apikey };
}

module.exports = getToken;
