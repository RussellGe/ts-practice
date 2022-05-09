
type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n' }${infer Res}` ? TrimLeft<Res> : S