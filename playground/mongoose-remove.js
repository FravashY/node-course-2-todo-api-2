const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b8eceeb9b61e53030b89c4c'}).then((todo) => {
  
})

Todo.findByIdAndRemove('5b8eceeb9b61e53030b89c4c').then((todo) => {
  console.log(todo)
})
