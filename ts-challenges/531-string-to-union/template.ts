type StringToUnion<T extends string> = T extends `${infer first}${infer Res}`
  ? first | StringToUnion<Res>
  : never;
