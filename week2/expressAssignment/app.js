const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('First Middleware')
//     next();
// });

// app.use((req, res, next) => {
//     console.log('second Middleware')
//     res.send('<p>Assignment Solved (almost) </p>');
// });

app.use('/',(req, res, next) => {
    console.log('/users Middleware')
    res.send('<p>THe middleware that handles just /users </p>')
});

app.use('/',(req, res, next) => {
    console.log('/ Middleware')
    res.send('<p>THe middleware that handles just / </p>')

});


app.listen(3000);