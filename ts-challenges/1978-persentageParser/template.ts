type PercentageParser<A extends string, Res extends unknown[] = []> =
  A extends `${"+" | "-"}${infer RestAll}`
    ? A extends `${infer First}${infer Rest}`
      ? PercentageParser<Rest, [First]>
      : never
    : A extends `${infer F}%`
    ? Res["length"] extends 0
      ? ["", F, "%"]
      : [...Res, F, "%"]
    : Res["length"] extends 0
    ? ["", A, ""]
    : [...Res, A, ""];

type show = PercentageParser<"+100">;
