const express = require("express");
const { Joi, celebrate, Segments } = require("celebrate");
const ongsController = require("../controllers/OngController");
const routes = express.Router();

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(13),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
    })
  }),
  ongsController.create
);

routes.delete("/ongs/:id", ongsController.delete);

routes.get("/ongs", ongsController.index);

module.exports = routes;
