"use strict";

const exampleJs = require("..");
const assert = require("assert").strict;

assert.strictEqual(exampleJs(), "Hello from exampleJs. core says: hello");
console.info("exampleJs tests passed");
