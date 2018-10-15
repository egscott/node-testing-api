const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");

const { User } = require("./../server/models/users");

// var id = "6bc1049d194619f85e4467e3";

// if (!ObjectID.isValid(id)) {
//   console.log(`ID not valid`);
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todos", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       console.log(`Nope, not there`);
//     }
//     console.log("todo", todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });

var id = "5bc08e155a3d03e84284f62a";

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log(`Nope not here`);
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => {
    console.log(e);
  });
