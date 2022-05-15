// 实现一个提取不确定层数的Promise中的Value类型的高级类型

type ttt = Promise<Promise<Promise<Record<string, any>>>>;

type DeepPromise<T extends Promise<unknown>> = T extends Promise<
  infer inferValue
>
  ? inferValue extends Promise<unknown>
    ? DeepPromise<inferValue>
    : inferValue
  : never;

type showDeepPromise = DeepPromise<ttt>;

/** 数组处理 */
// 实现数组reverse
type arr = [1, 2, 3, 4, 5];
type ReverseArr<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...ReverseArr<Rest>, First]
  : T;

type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);

// 实现数组includes
type Includes<T extends unknown[], FindItem> = T extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, FindItem> extends true
    ? true
    : Includes<Rest, FindItem>
  : false;
type arrHas4 = Includes<arr, 4>;
type arrHas6 = Includes<arr, 6>;

// 实现数组remove
type RemoveItem<Arr extends unknown[], Item, Result extends unknown[] = []> =
  Arr extends [infer First, ...infer Rest]
    ? IsEqual<First, Item> extends true
      ? RemoveItem<Rest, Item, Result>
      : RemoveItem<Rest, Item, [...Result, First]>
    : Result;
type arrRemove4 = RemoveItem<arr, 4>;
type arrRemove6 = RemoveItem<arr, 6>;

// Array构造器
type BuildArr<Length extends number, Ele, Arr extends unknown[] = []> =
  Arr["length"] extends Length ? Arr : BuildArr<Length, Ele, [...Arr, Ele]>;

type showBuildArr = BuildArr<5, 1>;

/** 字符串处理 */
// replaceAll
type ReplaceAllString<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer A}${From}${infer C}`
  ? `${ReplaceAll<A, From, To>}${To}${ReplaceAll<C, From, To>}`
  : Str;

type showReplaceAllString = ReplaceAllString<
  "43215321432143214231432432412",
  "1",
  "ppppp"
>;

// string to union
type StringToUnionShow<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never;
type showStringToUnion = StringToUnionShow<"vdsavdsa">;

// string reverse
type ReverseString<Str extends string, Res extends string = ""> =
  Str extends `${infer First}${infer Rest}`
    ? ReverseString<Rest, `${First}${Res}`>
    : Res;

type showReverseString = ReverseString<"qwertyuio">;

/** 对象类型递归 */
// deep readonly
type DeepReadonly<Obj extends Record<string, any>> = Obj extends any
  ? {
      readonly [Key in keyof Obj]: Obj[Key] extends Record<string, any>
        ? DeepReadonly<Obj[Key]>
        : Obj[Key];
    }
  : never;
type obj = {
  a: {
    b: {
      c: {
        f: () => "dong";
        d: {
          e: {
            guang: string;
          };
        };
      };
    };
  };
};
type showDeepReadonly = DeepReadonly<obj>;
