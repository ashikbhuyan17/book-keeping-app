const mongoose = require('mongoose');

const dbConnect = async () => {

  mongoose.connect('mongodb://localhost:27017/book-keeping', {    //contacts-db => documents     and table = collection
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection
  // console.log(db);
  db.on('error', (err) => {
    console.log(err);
  })
  db.once('open', () => {
    console.log("database connection done  ");
  })

};

module.exports = dbConnect;
