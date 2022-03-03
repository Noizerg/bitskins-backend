const { generateTotp, base32Decode } = require('../utils/common.js');

let apikey = process.env.APIKEY;
require('dotenv').config();
function getCode() {
  return generateTotp(base32Decode(process.env.SHAREDSECRET));
}

function getToken() {
  return { code: getCode(), apikey };
}

module.exports = getToken;
