const User = require('../models/userModel');
 const loginUsers = async (req, res) => {
const { email, password } = req.body;
if (!email || !password) {
return res.status(400).json({
    success: false,
    message: 'Please enter email and password'
})
}
const user =await User.findOne({email}).select('+password');
if(!user){
return res.status(404).json({
    success: false,
    message: 'Invalid Email or Password'
})
}
const ismatch = await user.comparePassword(password);
if(!ismatch){
return res.status(404).json({
message:'Invalid Email or Password'
})

}
const token = user.getJwtToken();
res.status(200).cookie("token",token,{
expires:new Date(Date.now()+30*24*60*60*4),
httpOnly:true

}).json({
    success: true,
    token
    

})

}
const logoutUser =async (req, res) => {
try{
res.status(200).cookie("token",null,{
    expires:new Date(Date.now()),}
    ).json({
        success:true,
        message:'Logged out'
    })
}catch(error){
res.status(500).json({
    success:false,
    message:error.message
})
}
}
 const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
if(!name || !email || !password){
return res.status(400).json({
    success:false,
    message:'Please enter all fields'
})
}
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/1',
            url: 'https://res.cloudinary.com/dxqjyqkxh/image/upload/v1620000000/avatars/1.png'
        }
    })
    console.log(user);
    const token = user.getJwtToken();
    res.status(201).json({
        success: true,
        user,
        token
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message

        })
        console.log(error);
    }

}
module.exports = {
registerUser,
loginUsers,
logoutUser
};
