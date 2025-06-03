import { addContact, updateContact, getContactByEmailOrPhone, checkEmailOrPhoneConflict } from '../config/db.js';

export const handleContactUpsert = async (firstName, lastName, email, phone) => {
    const existingContact = await getContactByEmailOrPhone(email, phone);

    if (!existingContact) {
        await addContact(firstName, lastName, email, phone);
        console.log('New contact added to the database.');
    } else {
        const conflict = await checkEmailOrPhoneConflict(existingContact.id, email, phone);
        if (conflict) {
            console.log('Conflict: The provided email or phone is already used by another contact. Skipping update.');
        } else {
            await updateContact(existingContact.id, firstName, lastName, email, phone);
            console.log('Existing contact updated with latest info.');
        }
    }
};
