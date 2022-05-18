/** 分布式条件类型 */
// 当类型参数为联合类型，并且在条件类型左边直接引用该类型参数的时候，
// TypeScript 会把每一个元素单独传入来做类型运算，
// 最后再合并成联合类型，这种语法叫做分布式条件类型。
type Union = "a" | "b" | "c";
type UpperCaseA<Item extends string> = Item extends "a"
  ? Uppercase<Item>
  : Item;
type showUpperCaseA = UpperCaseA<Union>; //  'b' | 'c' | 'A'
// 会把联合类型的每一个元素单独传入做类型计算，最后合并。

// CamelcaseUnion
type Camelcase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
    : Str;
type CamelRes = Camelcase<"aa_aa_aa">;

type Bem<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`;
type BemRes = Bem<
  "text",
  ["cdascvds", "fds"],
  ["fdsafdsafdsafs", "vfadsdfasd"]
>;

// 联合类型全组合
type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;
type Combinations<A extends string, B extends string = A> = A extends A
  ? Combination<A, Exclude<B, A>>
  : never;

type CombinationsRes = Combinations<"1" | "2" | "3" | "4">;
