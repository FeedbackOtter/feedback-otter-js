# Feedback Otter JS & TS Packages Mono Repo

_"You Otter be collecting feedback"_

## THIS PACKAGE IS NOT READY FOR USE YET

I'll be using the README to do document driven development through this project.

## The open source feedback collecting toolchain for React

## Getting Started

1. Import the client

```js
import { FeedbackClient } from "@feedback-otter/client";
```

2. initialize with your backend communication

- [ ] REST - POST request (PUT is also available with field `restRequest:"PUT"`)
- [ ] GraphQL - Mutation with the following schema `message: String, location: String, context: JSON`
- [ ] tRPC -
- [ ] Raw WebSocket
- [ ] Socket.io

```js
const client = new FeedbackClient({
  requestType: "REST",
  url: "https://example.com/feedback",
});
```

## Examples

See the examples folder for how to use the packages
