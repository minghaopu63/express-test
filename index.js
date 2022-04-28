const middlewareConfig = require('./config.js');
const finalHandler = require('./final-handler.js');

const express = require('express')
const app = express()
const port = 3000

middlewareConfig.forEach(middlewarePath => {
    const middleware = require(middlewarePath);
    app.use('/abcd', middleware);
})
app.use('/abcd', finalHandler);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
