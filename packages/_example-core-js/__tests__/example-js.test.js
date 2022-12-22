"use strict";

const exampleJs = require("..");
const assert = require("assert").strict;

// immediately invoked arrow function
(async () => {
  assert.strictEqual(
    await exampleJs(),
    "Hello from exampleJs. core says: hello"
  );
  console.info("exampleJs tests passed");
})();
