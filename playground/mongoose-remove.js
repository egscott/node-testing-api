const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/users");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findOneAndRemove({ _id: "5bca2bf968892c3932aacc33" }).then(todo => {
  console.log(todo);
});

Todo.findByIdAndRemove("5bca2bf968892c3932aacc33").then(todo => {
  console.log(todo);
});

// Todo.findOneAndRemove(res => {});
