const express = require('express')
const teams = require('./teams')
const { saveNewTeam } = require('./controller/teams')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.send({ teams })
})

app.get('/:id', (request, response) => {
  const { id } = request.params
  const findId = teams.filter(team => team.id === parseInt(id))

  return response.send(findId)
})


app.post('/', bodyParser.json(), saveNewTeam)




app.listen(1344)
