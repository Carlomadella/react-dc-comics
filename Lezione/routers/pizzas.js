// importo express
const express = require('express');

// importo la classe router
const router = express.Router();

// index
router.get('/', (req, res) => {
    res.send('lista delle pizze');
});

// show
router.get('/:id', (req, res) => {
    res.send(`dettaglio pizza ${req.params.id}`);
});

// store
router.post('/', (req, res) => {
    res.send('Inserimento nuova pizza');
});

// update
router.put('/:id', (req, res) => {
    res.send(`modifica totale della pizza ${req.params.id}`);
});

// modify
router.patch('/:id', (req, res) => {
    res.send(`modifica parziale della pizza ${req.params.id}`);
});

// destroy
router.delete('/:id', (req, res) => {
    res.send(`cancellazione della pizza ${req.params.id}`);
});

// esporto il router
module.exports = router;