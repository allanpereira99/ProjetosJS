const porta = 3003
const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParse = require('body-parser')
const app = express()

app.use(bodyParse.urlencoded({ extended: true }))
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.put('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        name: req.body.name,
        preco: req.body.preco

    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`rodando  servidor na porta ${porta}`)
})