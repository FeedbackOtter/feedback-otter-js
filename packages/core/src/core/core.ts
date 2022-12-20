type RequestType = 'REST' | 'GQL'
type RestVerb = 'POST' | 'PUT' | 'PATCH'

interface Options {
  url: string
  requestType: RequestType
  restVerb?: RestVerb
}

export class Core {
  url: string
  requestType: RequestType
  restVerb?: RestVerb

  constructor({ url, requestType, restVerb }: Options) {
    this.url = url
    this.requestType = requestType
    this.restVerb = restVerb
  }

  says() {
    return 'hello'
  }
}
