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

    //delete many
    // db.collection("Todos")
    //   .deleteMany({ text: "eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });
    //delete one
    // db.collection("Todos")
    //   .deleteOne({ text: "What ever" })
    //   .then(result => {
    //     console.log(result);
    //   });
    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Users")
    //   .findOneAndDelete({ name: "Eric" })
    //   .then(result => {
    //     var record = result;
    //     db.collection("Users").deleteMany({ name: record.name });
    //     db.collection("Users").insertOne({
    //       name: record.name,
    //       age: record.age,
    //       description: "NEW"
    //     });

    //     console.log(JSON.stringify(record, undefined, 2), `Result ${result}`);
    //   });

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5bbf9d397d46dd5d24f7c345") })
      .then(result => {
        console.log(result);
      });

    db.collection("Users").deleteMany({ name: /^Eric$/ });

    client.close();
  }
);
