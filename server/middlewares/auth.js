const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const {nextTick} = require('process');
exports.isAuthenticatedUser = async (req,res,next) =>{
const {token} = req.cookies;
if(!token){
    return res.status(401).json({
        success:false,
        message:'Login first to access this resource'
    })

}
const decoded = jwt.verify(token,process.env.JWT_SECRET);
req.user = await User.findById(decoded.id);
next();

}
