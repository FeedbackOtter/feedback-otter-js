interface Options<TSignature> {
  onFeedback: TSignature
}

export class Core<TSignature extends () => any> {
  // TODO: inherited classes for callback, REST, GQL, API keys, etc
  onFeedback: TSignature

  constructor({ onFeedback }: Options<TSignature>) {
    this.onFeedback = onFeedback
  }

  static fromCallback<T extends () => any>(onFeedback: T): Core<T> {
    return new Core<T>({
      onFeedback,
    })
  }

  send(): ReturnType<TSignature> {
    return this.onFeedback()
  }
}
