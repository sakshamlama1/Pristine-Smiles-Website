import { getAdminNotificationEmail, getPriceListEmail } from '../utils/emailTemplates.js';
import { sendEmailToClinic, sendEmailToContact } from '../utils/sendEmail.js';
import { handleContactUpsert } from "../utils/contactUtils.js";
import { cleanPhoneNumber } from "../utils/phoneUtils.js";
import { getPriceListPDF } from '../utils/fileUtils.js';

class contactController {

    async handleGetInTouchContact(req, res) {
        try {
            // Validate and sanitize the form data
            const { firstName, lastName, email, phone, treatment, interest, message } = req.body;

            const normalizedPhone = cleanPhoneNumber(phone);
            await handleContactUpsert(firstName, lastName, email, normalizedPhone);

            const adminEmail = getAdminNotificationEmail(firstName, lastName, email, normalizedPhone, treatment, interest, message); 
            sendEmailToClinic(adminEmail.subject, adminEmail.body)
            .then(() => {
                console.log("Email sent successfully.");
            })

            res.status(200).send({ message: "Thank you for reaching out! We will get back to you as soon as possible." });
        } catch (error) {
            console.error("Error processing form data:", error);
            res.status(500).send({ error: "Failed to process form data." });
        }
    };

    async handlePriceListForm(req, res) {
        try {
            const { firstName, lastName, email, phone } = req.body;

            const normalizedPhone = cleanPhoneNumber(phone);
            await handleContactUpsert(firstName, lastName, email, normalizedPhone);

            const { buffer, filename, path } = await getPriceListPDF();

            const priceListEmail = getPriceListEmail(firstName, lastName);
            const emailResult = await sendEmailToContact(email, priceListEmail.subject, priceListEmail.body, [
                {
                    filename,
                    path,
                    contentType: 'application/pdf',
                },
            ]);

            if (!emailResult.success) {
                return res.status(500).send({ error: 'Failed to send email.' });
            }

            // Send PDF as download response
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.setHeader('Content-Type', 'application/pdf');
            return res.send(buffer);
        } catch (error) {
            console.error("Error processing form data:", error);
            res.status(500).send({ error: "We couldn't process your request at the moment. Please try again soon." });
        }
    };

}

export default new contactController();
