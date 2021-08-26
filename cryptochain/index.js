const express = require('express');
const Blockchain = require('./blockchain');

const app= express();
const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

app.listen(PORT, () => console.log(`listening at localhost: ${PORT}`));

