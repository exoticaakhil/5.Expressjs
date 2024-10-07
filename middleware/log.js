const logger=(req,res,next)=>{
     let time = new Date().toLocaleTimeString()
    
     // create custom req property
     req.myTime =time
     // res.json{{middlewareTime :time }}
     next()
}
module.exports={ logger }