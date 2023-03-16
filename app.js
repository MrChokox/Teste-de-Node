const express = require("express");
const { randomUUID } = require("crypto");
const { response } = require("express");

const app = express();

app.use(express.json());

const produtos = [];

app.post("/produtos", (req, res) => {
    const {name, price } = req.body;

    const product = {
        name,
        price,
        id: randomUUID(),
    };

    produtos.push(product);
    return res.json(product);
});


app.listen(4002, () => {
    console.log("Estou rodando na porta 4002")
})