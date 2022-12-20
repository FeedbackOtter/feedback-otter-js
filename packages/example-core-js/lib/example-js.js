"use strict";

module.exports = exampleJs;
const { Core } = require("@feedback-otter/core");

function exampleJs() {
  const core = new Core({
    url: "https://example.com",
    requestType: "REST",
  });
  return `Hello from exampleJs. core says: ${core.says()}`;
}
