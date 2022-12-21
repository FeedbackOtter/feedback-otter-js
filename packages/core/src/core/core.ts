type RequestType = 'REST' | 'GQL'
type RestVerb = 'POST' | 'PUT' | 'PATCH'
// TODO: git good at generics to infer the return type of the callback
// while sending any arguments to the function.
// This would be trivial if we weren't saving the callback as a property
// for use later. But that's the whole point of this class.
type CallbackFunction = () => unknown

interface Options {
  url?: string
  requestType?: RequestType
  restVerb?: RestVerb
  onFeedback?: CallbackFunction
}

export class Core {
  // TODO: inherited classes for callback, REST, GQL, API keys, etc
  url?: string
  requestType?: RequestType
  restVerb?: RestVerb
  onFeedback?: CallbackFunction

  constructor({ url, requestType, restVerb, onFeedback }: Options) {
    this.url = url
    this.requestType = requestType
    this.restVerb = restVerb
    this.onFeedback = onFeedback
  }

  static fromCallback(onFeedback: CallbackFunction) {
    return new Core({
      onFeedback,
    })
  }

  async send<T>(): Promise<T> {
    return (await this.onFeedback?.()) as T
  }
}
