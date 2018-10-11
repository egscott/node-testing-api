const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log(`DB connect frailed ${err}`);
    }
    console.log(`Connected to MongoDB server`);

    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5bbf98526afa116859f493fd") },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bbf6ec81040ac5d184f3335")
        },
        {
          $inc: { age: 1 },
          $set: { name: "Eric" }
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(JSON.stringify(result, undefined, 2));
      });

    client.close();
  }
);
