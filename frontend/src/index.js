import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: process.env.REACT_APP_DNS_SENTRY,
});

ReactDOM.render(<App />, document.getElementById("root"));
