// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to Mongodb server');
  }
  console.log ('Connected to Mongodb server');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('597f865ec0ff8b82121563c9')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//     returnOriginal: false
// }).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('597d3ef78c737503e86cf86c')
},{
  $set: {
    name: 'VaseaPatanu'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});



  // db.close();
});
