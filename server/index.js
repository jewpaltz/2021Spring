/*  B"H
*/

const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { LoginRequired  } = require('./controllers/security');
const usersModel = require('./models/users');
const usersCtrl = require('./controllers/users');
const postsCtrl = require('./controllers/posts');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(express.static('./docs'))
    .use(cors())

    .use(async (req, res, next)=>{ 
        
        const token = req.headers.authorization?.split(' ')[1];
        req.user = token && await usersModel.FromJWT(token);
        //req.user = { isAdmin: true }
        next();
    }) 

    .use('/users', usersCtrl)
    .use('/posts', LoginRequired, postsCtrl)


    // All the way at the end of the pipeline. Return instead of not found
    .get('*', (req, res) => {
        res.sendFile( path.join(__dirname, '../docs/index.html' ) );
    })

    .use((error, req, res, next)=>{
      console.error(error);

        res.status(error.code || 500 );
        res.send( { msg: error.msg });
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})