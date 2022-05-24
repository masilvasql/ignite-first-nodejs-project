const express = require('express')
const app = express();

app.use(express.json())

app.listen(3333, () => {
    console.log(`Rodando na porta ${3333}`)
})