/*  B"H
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.static('./docs'))
    .get('/', (req, res) => {
    res.send('Hello World!')
    })
    .get('/purim', (req, res) => {
        res.send('Lechaim, to life!');
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})