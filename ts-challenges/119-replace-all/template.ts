type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ""
    ? S
    : S extends `${infer A}${From}${infer B}`
    ? `${ReplaceAll<A, From, To>}${To}${ReplaceAll<B, From, To>}`
    : S;
