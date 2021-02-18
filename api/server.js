const express = require('express');
const server = express();
const Routes = require('./golfers/golfers-model.js');
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: 'Up'})
})

server.get('/golfers', (req, res) => {
    Routes.find()
    .then((response) => {
        res.status(200).json({message: response});
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

server.get('/:id', (req, res) => {
    const { id } = req.params;
    Routes.findById(id)
    .then(golfer => {
        res.status(200).json(golfer)
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
})

server.post('/golfers', (req, res) => {
    const golfer = req.body;
    Routes.insert(golfer)
    .then((response) => {
        res.status(200).json({message: response});
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

server.delete('/golfers/:id', (req, res) => {
    const { id } = req.params;
    Routes.remove(id)
    .then((response) => {
        res.status(200).json({message: response});
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

module.exports = server
