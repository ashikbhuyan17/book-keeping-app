const jwt = require('jsonwebtoken');
require('dotenv').config();
console.log(process.env.JWT_SECRET);


const authTokenGenerator = userId => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = authTokenGenerator;
