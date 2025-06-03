// config/db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err, res) => {
    return new Promise((resolve, reject) => {
        if (err) {
            console.error('Error Connecting to the Database.');
            reject(err);
        } else {
            console.log('Successfully Connected to the Database.');
            resolve(res);
        }
    });
});

/**
 * Creates the Contact Table.
 */ 
export async function createContactTable() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS contact (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100),
            email VARCHAR(255) UNIQUE NOT NULL,
            phone VARCHAR(20) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        // Runs the SQL Query to Create the User Table.
        connection.query(query, (err, res) => {
        if (err) {
            console.error('Error Creating the Contact Table');
            reject(err);
        } else {
            console.log('Successfully Created the Contact Table If Not Exists.');
            resolve(res);
        }
        });
    });
}

export const getContactByEmailOrPhone = async (email, phone) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM contact WHERE email = ? OR phone = ? LIMIT 1";
        connection.query(query, [email, phone], (error, results) => {
            if (error) return reject(error);
            resolve(results[0]); // return the contact object
        });
    });
};

export const checkEmailOrPhoneConflict = async (currentId, newEmail, newPhone) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM contact WHERE (email = ? OR phone = ?) AND id != ?";
        connection.query(query, [newEmail, newPhone, currentId], (error, results) => {
            if (error) return reject(error);
            resolve(results.length > 0); // true if conflict exists
        });
    });
};

export const updateContact = async (id, firstName, lastName, email, phone) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE contact SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?";
        connection.query(query, [firstName, lastName, email, phone, id], (error, results) => {
            if (error) return reject(error);
            resolve(results.affectedRows);
        });
    });
};

// Function to insert a new contact
export const addContact = async (firstName, lastName, email, phone) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO contact (first_name, last_name, email, phone, created_at) VALUES (?, ?, ?, ?, NOW())";
        connection.query(query, [firstName, lastName, email, phone], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.insertId);
        });
    });
};
  

