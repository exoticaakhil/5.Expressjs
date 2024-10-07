const logger = (req, res, next) => {
   


    const role = req.query.role; 

    // Create custom req property
    
    req.role = role; // Add role to the request object

    console.log(` Role: ${role}`);

    next(); 
};

module.exports = { logger };
