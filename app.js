const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const app = express();

const data = require('./product.json')
const products = data.products;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.engine('ejs', engine);

app.get('/', (req, res) => {
    const allCategories = products.map(product => product.category);
    const uniqueCategories = allCategories.filter((product, idx, arr) => arr.indexOf(product) === idx);
    res.render('index.ejs', { products, categories: uniqueCategories });
})

app.get('/data/:id', (req, res) => {
    const item = products.filter(product => product.id === parseInt(req.params.id))[0]
    res.json(item);
})

app.get('/c/', (req, res) => {
    const { categories } = req.query;
    const filteredProducts = products.filter(product => {
        return categories.indexOf(product.category) >= 0;
    })
    categories ?
    res.render('partial/product.ejs', { products: filteredProducts }) :
    res.render('partial/product.ejs', { products })
})


app.listen(3000);