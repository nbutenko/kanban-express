const express = require('express');
const bodyParser = require('body-parser')
const routes = require('routes');
const app = express();
const PORT = 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let cards = [
    {id: '1', name: "First card", status: "to do", priority: 1},
    {id: '2', name: "Second card", status: "progress", priority: 2},
    {id: '3', name: "Third card", status: "review", priority: 3}
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/card', (req, res) => {
    res.send(cards);
})

app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
})

app.post('/card', (req, res) => {
    const card = req.body;
    cards.push({ id: Math.random().toString(), ...card })
    res.send('Card created');
})

app.patch('/card/:cardId', (req, res) => {
    const card = req.body;
    const cardId = req.params.cardId;
    cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el);
    res.send('Card updated');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = routes;