const {ObjectId} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// const id = '5b8da5e67738e1484fdacc2e11'
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo)
// })

// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found')
//     }
//     console.log('Todo by id: ', todo)
//   }).catch((e) => {
//     console.log(e)
//   })

const userId = '5b8d8f34c0dc9c6051a4d3a6'

User.findById(userId)
  .then((user) => {
    if (!user) return console.log('No user with this ID')
    console.log('User by id: ', user)
  }).catch((e) => console.log(e))
