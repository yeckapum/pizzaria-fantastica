const pizzas = require('../database/Pizzas.json');

const controller = {
    listar: (req,res) => {
        res.send('Listando as Pizzas...')
    }
}

module.exports = controller;