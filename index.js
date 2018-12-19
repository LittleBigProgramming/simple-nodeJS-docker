const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hai <3');
});

app.listen(8080, () => {
    console.log('listening on 8080');
});