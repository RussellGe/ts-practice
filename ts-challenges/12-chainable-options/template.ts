type Chainable = {
    option(key: string, value: any): readonly key: typeof value,
    get(): any
  }