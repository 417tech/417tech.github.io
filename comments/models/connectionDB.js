// DataBase
const config = require('../config/development_config');
const mysqlt = require("mysql");

const connection = mysqlt.createConnection({
  /*host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database*/
  host: 'localhost',
  user: 'test',
  password: '1234',
  database: 'comments'
});

connection.connect(err => {
  if (err) {
    console.log('connecting error');
    console.log(err);
  } else {
    console.log('connecting success');
  }
});

module.exports = connection;