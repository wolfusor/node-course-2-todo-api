// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to Mongodb server');
  }
  console.log ('Connected to Mongodb server');

  // db.collection('Users').insertOne({
  //   name: 'dj Vasile',
  //   age: 88,
  //   loc: "Moldova"
  // }, (err,res) => {
  //   if (err) {
  //     return console.log('Unable to record Users', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });
  db.close();
});
