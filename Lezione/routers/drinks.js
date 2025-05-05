// importo express
const express = require('express');

// importo la classe router
const router = express.Router();

// index
router.get('/', (req, res) => {
    res.send('lista dei drinks');
});

// show
router.get('/:id', (req, res) => {
    res.send(`dettaglio drink ${req.params.id}`);
});

// store
router.post('/', (req, res) => {
    res.send('Inserimento nuova drink');
});

// update
router.put('/:id', (req, res) => {
    res.send(`modifica totale del drink ${req.params.id}`);
});

// modify
router.patch('/:id', (req, res) => {
    res.send(`modifica parziale del drink ${req.params.id}`);
});

// destroy
router.delete('/:id', (req, res) => {
    res.send(`cancellazione del drink ${req.params.id}`);
});

// esporto il router
module.exports = router;