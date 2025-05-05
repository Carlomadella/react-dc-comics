//import express
const express = require('express');
//function express into app
const app = express();
//import routers
const pizzasRouter = require('./routers/pizzas.js');
const drinksRouter = require('./routers/drinks.js');
//specify port
const port = 3000;

//use routes
app.use('/pizzas', pizzasRouter)
app.use('/drinks', drinksRouter)

// base route
app.get('/', (req, res) => {
    res.send('La mia risposta');
});

// *******************************************************************
// // index
// app.get('/pizzas', (req, res) => {
//     res.send('Le mie pizze');
// });

// // show
// // route with parameter
// app.get('/pizzas/:id', (req, res) => {
//     // req.params.id
//     // req.params è un oggetto che contiene i parametri della route
//     const id = req.params.id;
//     res.send('La mia pizza ' + id);
// });

// // store
// app.post('/pizzas', (req, res) => {
//     // crea una pizza
//     res.send('Crea una pizza');
// });

// // update
// app.put('/pizzas/:id', (req, res) => {
//     // aggiorna una pizza
//     res.send('modifica totale della pizza ' + req.params.id);
// });

// // modify
// app.patch('/pizzas/:id', (req, res) => {
//     // modifica parziale una pizza
//     res.send('Modifica parziale della pizza ' + req.params.id);
// });

// // destroy
// app.delete('/pizzas/:id', (req, res) => {
//     // cancella una pizza
//     res.send('Cancella la pizza ' + req.params.id);
// });
// *******************************************************************

// server listening port
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})
