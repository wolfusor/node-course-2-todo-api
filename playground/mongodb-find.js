// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to Mongodb server');
  }
  console.log ('Connected to Mongodb server');

  db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('597f865ec0ff8b82121563c9')
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });
// db.collection('Todos').find({
//   _id: new ObjectID('597d355935ca460dccf807a5')
// }).toArray().then((documents) => {
//   console.log('Todos');
//   console.log(JSON.stringify(documents, undefined, 3));
// }, (err) => {
//   console.log('Unable to fetch Todos', err);
// })

// db.collection('Users').find({name:'Vadim'}).toArray().then((documents) =>{
//   console.log(documents);
// }, (err) => {
//   console.log('Unable to find user/s Vasea',err);
// })

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch Todos', err);
// })

  // db.close();
});
