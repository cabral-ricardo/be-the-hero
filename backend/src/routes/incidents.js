const express = require("express");
const { Joi, celebrate, Segments } = require("celebrate");
const incidentController = require("../controllers/IncidentController");
const routes = express.Router();

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().min(3).max(30),
      description: Joi.string().required(5).min(3).max(100),
      value: Joi.number().min(10)
    })
  }),
  incidentController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().min(10)
    })
  }),
  incidentController.index
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  incidentController.delete
);

module.exports = routes;
