require('dotenv').config();

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo perras caras de mondonguini")
});

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

