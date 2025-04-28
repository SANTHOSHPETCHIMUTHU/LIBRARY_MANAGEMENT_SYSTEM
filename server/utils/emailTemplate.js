export function generativeVerificationOtpEmailTemplate(otpCode) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; background-color: #1a1a1a;">
        <h2 style="color: #fff; text-align: center;">Verify Your Email Address</h2>
        
        <p style="font-size: 16px; color: #ccc;">Dear User,</p>
        
        <p style="font-size: 16px; color: #ccc;">
          To complete your registration or login, please use the following OTP code:
        </p>
        
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; font-size: 24px; font-weight: bold; color: #00ff00; padding: 10px 20px; border: 2px dashed #00ff00;">
            ${otpCode}
          </span>
        </div>
        
        <p style="font-size: 16px; color: #ccc;">
          This code is valid for 15 minutes. Please do not share this code with anyone.
        </p>
        
        <p style="font-size: 14px; color: #666;">
          If you did not request this email, please ignore it.
        </p>
        
        <footer style="margin-top: 20px; text-align: center; font-size: 12px; color: #444;">
          <p>Thank you,<br/>Team</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </footer>
      </div>
    `;
  }
  