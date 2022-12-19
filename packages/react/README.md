# Feedback Otter React

_"You Otter be collecting feedback"_

## THIS PACKAGE IS NOT READY FOR USE YET

I'll be using the README to do document driven development through this project.

## The open source feedback collecting toolchain for React

## Getting Started

1. Import the client

```jsx
import { FeedbackClient } from '@feedback-otter/client'
```

2. initialize with your backend communication

- [ ] REST - POST request (PUT is also available with field `restRequest:"PUT"`)
- [ ] GraphQL - Mutation with the following schema `message: String, location: String, context: JSON`
- [ ] tRPC -
- [ ] Raw WebSocket
- [ ] Socket.io

```jsx
const client = new FeedbackClient({
  requestType: 'REST',
  url: 'https://example.com/feedback',
})
```

3. Use the provider

```jsx
<FeedbackProvider client={feedbackClient}>{children}</FeedbackProvider>
```

## Examples

See the examples folder for how to use the React components

- Next.js REST example
- Redwood.js GQL example
- SPA & separate backend example
