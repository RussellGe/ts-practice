type Flatten<Arr extends any[], U extends any[] = []> = Arr extends [
  infer A,
  ...infer Res
]
  ? A extends any[]
    ? Flatten<[...A, ...Res], U>
    : Flatten<Res, [...U, A]>
  : U;
