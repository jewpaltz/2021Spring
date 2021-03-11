/* B"H

*/
const express = require('express');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', (req, res)=> res.send( model.GetAll() ) )

module.exports = app;