import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connection, createContactTable } from './config/db.js';
import contactController from './controllers/contactController.js';

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Starting the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);

  // Creates the Contact Table
  createContactTable();

  // Correct usage: Pass function reference, not invoke it.
  app.post('/get-in-touch-contact', contactController.handleGetInTouchContact);
  app.post('/price-list-form', contactController.handlePriceListForm);

  // Terminates the Server Application on SIGINT
  process.on('SIGINT', async () => {
    connection.end();
    server.close();
    console.log("Disconnected from Database... The Server Application Terminated...");
  });
});
