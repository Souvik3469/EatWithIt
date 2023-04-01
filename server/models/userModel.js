const mongoose =require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    validate :[validator.isEmail,'Please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false,
    },
    avatar:{
        public_id:String,
        url:String
    }

})
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
}
)
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},'search',{
        expiresIn:'1d'
    })
}
module.exports = mongoose.model('User',userSchema);