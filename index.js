const middlewareConfig = require('./config.js');
const finalHandler = require('./final-handler.js');

const express = require('express')
const router = new express.Router()
const app = express()
const port = 3000

middlewareConfig.forEach(middlewarePath => {
    const middleware = require(middlewarePath);
    router.get('/abcd', middleware);
})
router.get('/abcd', finalHandler);
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
