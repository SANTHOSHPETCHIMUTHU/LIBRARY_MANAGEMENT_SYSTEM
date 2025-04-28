import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select:false,
  },
  role:{
    type:String,
    enum:["Admin","User"],
    default:"User",
  } ,

  accountVerified:{
    type:Boolean,
    default:false,
    },
    borrowBooks:[
        {
        bookId:{
            type:mongoose.schema.Types.ObjectId,
            ref:"Borrow",
        },
        returned:{
            type:Boolean,
            default:false,
        },
        BookTitle:String,
        borrowData:Data,
        dueDate:Date,
        },
    ], 
    avatar:{
        public_id:String,
        url:String,
    },
    verificationCode: Number,
    verficationCodeExpire:Date,
    resetPasswordToken:String,
        resetPasswordExpire:Date,
},
{
  timestamps:true,
}

);

userSchema.methods.generativeVerificationCode=function(){
    function generateRandomFiveDigitNumber() {
        const firstDigit= Math.floor(Math.random() * 9) + 1; // First digit (1-9)
        const remainingDigits= Math.floor(Math.floor(Math.random() * 10000))
        .toString().padStart(4,0);

        return parseInt(firstDigit+remainingDigits);
    }
    const verificationCode=generateRandomFiveDigitNumber();
    this.verificationCode=verificationCode;
    this.verficationCodeExpire=Date.now()+15*60*1000; // 10 minutes   
    return verificationCode; // Remaining digits (0-9999)

    };
export const User=mongoose.model("User",userSchema);

