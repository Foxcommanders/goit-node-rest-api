const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
})
  .min(1)
  .message("Body must have at least one field");

const updatefavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
const userSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatarURL: Joi.string(),
});

const avatarAchema = Joi.object({
  avatarURL: Joi.string(),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
  updatefavoriteSchema,
  userSchema,
  avatarAchema,
};
