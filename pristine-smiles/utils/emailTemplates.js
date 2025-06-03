export const getAdminNotificationEmail = (firstName, lastName, email, phone, treatment, interest, message) => {
    return {
        subject: "IMPORTANT: New Get In Touch Form Submission",
        body: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px;">
                <h2 style="color: #5B9D7D; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Inquiry Received</h2>
                
                <p style="line-height: 1.6;"><strong>First Name:</strong> ${firstName}</p>
                <p style="line-height: 1.6;"><strong>Last Name:</strong> ${lastName}</p>
                <p style="line-height: 1.6;"><strong>Email:</strong> ${email}</p>
                <p style="line-height: 1.6;"><strong>Phone:</strong> ${phone}</p>
                <p style="line-height: 1.6;"><strong>Treatment:</strong> ${treatment}</p>
                <p style="line-height: 1.6;"><strong>Interest:</strong> ${interest}</p>
                <p style="line-height: 1.6;"><strong>Message:</strong> ${message}</p>

                <br />
                <p style="font-size: 12px; color: #999; text-align: center;">This email was generated from your website's Get In Touch form.</p>
            </div>
        `
    };
};

export const getPriceListEmail = (firstName, lastName) => {
    return {
        subject: 'Your Requested Price List from Pristine Smiles',
        body: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px;">
                <h2 style="color: #5B9D7D; border-bottom: 1px solid #eee; padding-bottom: 10px;">Thank You for Your Interest</h2>

                <p style="line-height: 1.6;">Dear ${firstName} ${lastName},</p>

                <p style="line-height: 1.6;">
                    Thank you for reaching out to us! Please find the requested price list attached to this email.
                    We appreciate your interest and look forward to helping you with your dental care needs.
                </p>

                <p style="line-height: 1.6;">
                    If you have any questions or require further assistance, feel free to contact us anytime:
                </p>

                <p style="line-height: 1.6;">
                    📞 <strong>Phone:</strong> (02) 9476 1418 <br />
                    ✉️ <strong>Email:</strong> info@pristinesmiles.com.au
                </p>

                <br />
                <p style="line-height: 1.6;">
                    Best regards, <br />
                    <strong>The Pristine Smiles Team</strong>
                </p>

                <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                
                <p style="font-size: 12px; color: #999; text-align: center;">
                    This is an automated email. Please do not reply directly to this message.
                </p>
            </div>
        `
    };
};
