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
    //   .find({
    //     _id: new ObjectID("5bbf79c06afa116859f490f3")
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log(`Unable for fetch todo's ${err}`);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log(`Unable for fetch todo's ${err}`);
    //     }
    //   );

    db.collection("Users")
      .find({ location: /^You/ })
      .toArray()
      .then(
        res => {
          console.log(JSON.stringify(res, undefined, 2));
        },
        err => {
          console.log(`Danger errors ${err}`);
        }
      );

    client.close();
  }
);
