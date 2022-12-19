"use strict";

module.exports = exampleJs;
const { Core } = require("@feedback-otter/core");

function exampleJs() {
  const core = new Core();
  return `Hello from exampleJs. ${core.name} says: ${core.says()}`;
}
