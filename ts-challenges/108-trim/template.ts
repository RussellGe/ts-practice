type Trim<S extends string> = S extends `${" " | "\t" | "\n"}${infer Res}`
  ? Trim<Res>
  : S extends `${infer Res}${" " | "\t" | "\n"}`
  ? Trim<Res>
  : S;
