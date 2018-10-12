const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");

var id = "6bc1049d194619f85e4467e3";

Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todos", todo);
});

Todo.findById(id).then(todo => {
  if (!todo) {
    console.log(`Nope, not there`);
  }
  console.log("todo", todo);
});
