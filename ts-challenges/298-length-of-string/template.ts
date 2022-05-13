type StringToArr<S extends string> = S extends `${infer A}${infer Res}`
  ? [A, ...StringToArr<Res>]
  : [];
type LengthOfString<S extends string> = StringToArr<S>["length"];
