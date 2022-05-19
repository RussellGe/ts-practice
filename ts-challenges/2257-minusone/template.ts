type MinusOne<T extends number> = BuildArr<T> extends [infer First, ...infer Rest] ? Rest['length'] : never
