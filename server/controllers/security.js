/* B"H
*/

module.exports.LoginRequired = (req, res, next)=>{ 
    if(req.user){
        next();
    }else{
        next({ code:403, msg: "You need to be logged in to access this resource" })
    }
}
