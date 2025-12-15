require('dotenv').config();



const express = require("express");


const app = express('path');


app.get('/', (req, res) => {
    res.send('hola mundo desde el server hijos de PERRA')
});

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

