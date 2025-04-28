import {generativeVerificationOtpEmailTemplate} from "./emailTemplates.js";
import { sendEmail } from "./sendEmail.js"; 


export async function sendverficationCode(verification,email,res){
    try{
        const  message= generativeVerificationOtpEmailTemplate();
        sendEmail({
            email,
            subject:"Library Management System Verification Code",
            message,
        });
        res.status((200).json({
            success:true,
            message:`Verification code sent to ${email}`,
        }));
        
    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"verfication code not sent",
        })
        

    }

}