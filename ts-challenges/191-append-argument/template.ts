type AppendArgument<Fn extends Function, A> = Fn extends (
  ...arg: infer Arg
) => infer Res
  ? (...args: [...Arg, A]) => Res
  : never;
