const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.all('*', (req, res) => {
    res.status(400).send('Bad request');
});//ALL ALLL ALLL METHODS AND DOUTES!!!!!

app.listen(3000, () => {
    console.log('Server started');
});


