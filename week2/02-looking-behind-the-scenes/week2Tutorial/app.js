const express = require('express');
const app = express();




app.use('/add-product',(req, res, next) => {
    console.log('/in another Middleware')
    res.send('<form class="product-form" action="/product" method="POST"    <div class="form-control"><label for="title">Title</label><input type="text" name="title" id="title"></div><button type="submit">Add Product</button></form>')
    });

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})
app.use('/',(req, res, next) => {
    console.log('this always runs!')
    res.send('<h1>Hello from Express.js </h1>')
    next();
});


app.listen(3000);