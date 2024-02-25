const jwt = require('jsonwebtoken');

const getjwtToken = async (userId,res)=>{
    const token =  jwt.sign({_Id:userId},process.env.JWT_SECRET,{
        expiresIn: '1d'
    });

    res.cookie("Token",token,{
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    })
}

module.exports = getjwtToken;