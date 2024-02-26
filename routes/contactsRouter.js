const express = require('express');
const contacts = require("../controllers/contactsControllers.js");
const validateBody = require('../helpers/validateBody');
const schemas = require('../schemas/contactsSchemas');

const contactsRouter = express.Router();

contactsRouter.get("/", contacts.getAllContacts);

contactsRouter.get("/:id", contacts.getOneContact);

contactsRouter.delete("/:id", contacts.deleteContact);

contactsRouter.post("/", validateBody(schemas.createContactSchema), contacts.createContact);

contactsRouter.put("/:id", validateBody(schemas.updateContactSchema), contacts.updateContact);

module.exports = contactsRouter;
