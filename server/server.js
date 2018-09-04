const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  const isValid = ObjectId.isValid(id)

  if (!isValid) return res.status(404).send()
  Todo.findById(id)
    .then((todo) => {
      if (!todo) return res.status(404).send()
      res.status(200).send({todo})
    }).catch((e) => {
      res.status(400).send()
    })
})

app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id
  // validate the id -> not valid? return 404
  const isIdValid = ObjectId.isValid(todoId)
  if (!isIdValid) return res.status(404).send()
  Todo.findByIdAndRemove(todoId)
    .then((todo) => {
      if (!todo) return res.status(404).send()
      res.status(200).send({todo})
    })
    .catch((err) => {
      res.status(400).send()
    })
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = {
  app
}
