// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to Mongodb server');
  }
  console.log ('Connected to Mongodb server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // })


// db.collection('Todos').deleteOne({text: 'Eat luch'}).then((result) =>{
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
//   console.log(result);
// })

db.collection('Users').findOneAndDelete({_id: new ObjectID('597d3741d6194115b0b43a2c')}).then((result)=>{
  console.log(result);
});

  // db.close();
});
