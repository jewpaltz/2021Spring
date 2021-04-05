/* B"H

*/
const express = require('express');
const users = require('../models/users');
const model = require('../models/posts');

const app = express.Router();

    app
        .get('/', (req, res)=>{

            if(req.user.isAdmin){
                res.send( model.GetAll() );
            }else{
                res.send( model.GetWall(req.user.handle) );
            }

        }  )
        .get('/:post_id',(req, res)=> {
            
            if(+req.params.post_id){
                res.send( model.Get(req.params.post_id) )
            }else{
                res.send( model.GetWall(req.params.post_id) )
            }

        })

        .post('/', (req, res)=> { 

            req.body.user_handle = req.user.handle;

            res.send( model.Add(req.body) );

        })

        .patch('/:post_id', (req, res)=> res.send( 

            model.Update( req.params.post_id, req.body)

        ) )
        
        .delete('/:post_id', (req, res)=> res.send( model.Delete(req.params.post_id) ) )


module.exports = app;