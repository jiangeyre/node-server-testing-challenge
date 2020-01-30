const express = require('express');

const Movies = require('../movies/moviesModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', dbenv: process.env.DB_ENV });
});

server.get('/movies', (req, res) => {
    Movies.getAll()
        .then(movie => {
            res.status(200).json(movie);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.post('/movies', (req, res) => {
    Movies.insert(req.body)
        .then(([id]) => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.delete('/movies/:id', (req, res) => {
    Movies.remove(req.params.id)
        .then(movie => {
            res.status(200).json(movie)
        })
        .catch(err => {
            res.status(500).json(err.message)
        });
});

module.exports = server;