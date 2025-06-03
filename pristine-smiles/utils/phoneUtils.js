export const normalizeAustralianPhoneNumber = (phone) => {
    const cleaned = phone.replace(/[\s-]/g, '');
    if (cleaned.startsWith('+61')) {
        return '0' + cleaned.slice(3);
    } else if (cleaned.startsWith('61')) {
        return '0' + cleaned.slice(2);
    } else {
        return cleaned;
    }
};

export const cleanPhoneNumber = (phone) => {
    const local = normalizeAustralianPhoneNumber(phone);
    return local.replace(/\D/g, '');
};
