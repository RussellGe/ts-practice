type DropChar<S extends string, C extends string> =
  S extends `${infer A}${C}${infer B}` ? DropChar<`${A}${B}`, C> : S;
