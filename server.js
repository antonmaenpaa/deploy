const express = require('express');
const Port = 4000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(Port, () => {
    console.log('Server is running')
})