"use strict";

module.exports = exampleJs;
const { Core } = require("@feedback-otter/core");

async function exampleJs() {
  const helloFromCore = () => "core says: hello";
  const core = new Core.fromCallback(helloFromCore);
  const res = await core.send();
  return `Hello from exampleJs. ${res}`;
}
