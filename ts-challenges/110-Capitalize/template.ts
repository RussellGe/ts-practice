type MyCapitalize<S extends string> = S extends `${infer R}${infer res}`
  ? `${Uppercase<R>}${res}`
  : "";
