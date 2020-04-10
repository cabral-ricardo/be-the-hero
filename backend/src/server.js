const app = require("./app");
const Sentry = require("@sentry/node");
require("dotenv").config();

Sentry.init({
  dsn: process.env.DNS_SENTRY,
});

app.listen(process.env.PORT || 3334);
