const { query } = require('express');
const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/api/quotes/random', (req,res,next) => {
    res.send(getRandomElement(quotes));
});

app.get('/api/quotes', (req,res,next) => {
    if(req.query.person !== undefined) {
        const quotesByPerson = quotes.filter(quote => quote.person === req.query.person)
        res.send({
            quotes: quotesByPerson
        })
    } else {
        res.send({
            quotes: quotes
        })
    }
});

console.log(app.get)
