import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../utils/emailTemplate.js';
import {User} from '../models/userModel.js';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { sendverficationCode } from '../utils/sendVerificationCode.js';  




export const register = catchAsyncErrors(async (req, res, next) => {
    try{
        const { name,email,password }=req.body;
        if(!name || !email || !password){
            return next(new ErrorHandler("Please Enter all fields",400));
        }
        const isRegistered=await User.findOne({email,accountVerified:true});
        if(isRegistered){
            return next(new ErrorHandler("User already registered",400));
        }
        const registerationAttemptiveByUser=await User.find({
            email,
        accountVerified:false,
        });
        if(registerationAttemptiveByUser.length>5){
            return next(new ErrorHandler("You have exceeded the number of registration attempts , Please verify your email",400));
        }
        if(password.length<8 || password.length>16){
            return next(new ErrorHandler("Password should be between 8 to 20 characters",400));
        }

        const hashPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,
            password:hashPassword,
        })
        const verificationCode= await user.generativeVerificationCode();
        await user.save();
        senderVerificationCode(verificationCode,email,res);
    }catch (error) {
        next(error);
    }

});

