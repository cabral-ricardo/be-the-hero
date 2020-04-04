const express = require("express");
const { Joi, celebrate, Segments } = require("celebrate");
const ProfileController = require("../controllers/ProfileController");
const routes = express.Router();

routes.get(
  "/profiles",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

module.exports = routes;
