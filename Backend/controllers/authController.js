const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userModel=require("../models/user")

exports.signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        let user=await userModel.findOne({email})
        if(user){
           return   res.status(400).json({message: "Email already exists"})
            
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        user=new userModel({
            name,
            email,
            password:hashedPassword,
            
        })
        await user.save()
       const token=jwt.sign(
            {id: user._id,role:user.role},//payload
            process.env.JWT_SECRET_KEY,
            {expiresIn:"1h"}
       )
        res.status(201).json({message: "SignUp successful",token})
    }catch(err){
        console.log(err)
        res.json({error: err.message})
    }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await userModel.findOne({email})

        if(!user){
            return res.json({message:"user not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({message:"invalid password"})
        }
        //to generate a token
        const token=jwt.sign(
            {id: user._id,role: user.role},//payload
            process.env.JWT_SECRET_KEY,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            message:"login successful",
            token: token,// to send the token
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            },
            role:user.role//to get role
        })
    }catch(err){
        console.log(err)
        res.json({error: err.message})
    }
}