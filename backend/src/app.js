const express = require("express");
const router_incidentes = require("./routes/incidents");
const routesr_ongs = require("./routes/ongs");
const router_profiles = require("./routes/profiles");
const router_sessions = require("./routes/sessions");

const { errors } = require("celebrate");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router_incidentes);
app.use(routesr_ongs);
app.use(router_profiles);
app.use(router_sessions);
app.use(errors());

module.exports = app;
