// 判断any

import { NotEqual } from "@type-challenges/utils";

// any类型与任何类型的交叉都是any
type IsAny<T> = "isAny" extends "yesIsAny" & T ? true : false;
type IsAnyResult = IsAny<any>;

// 判断相等v1 问题出在any的判断上面 因为any可以是任何类型 任何类型也可以是any 所以这样无法判断any类型
type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);
type IsEqualAny = IsEqual<"any", any>;

// 判断相等v2
type IsEqual2<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;
type IsEqual2Any = IsEqual2<"any", any>;

// 判断union
type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;
type IsUnionShow = IsUnion<1 | 2>;
type IsUnionShow2 = IsUnion<1 | 2>;
type IsUnionShow3 = IsUnion<string | any>;

// 判断never
type TestNever<T> = T extends number ? 1 : 2;
type showTestNever = TestNever<never>;

type IsNever<T> = [T] extends [never] ? true : false;
type IsNeverShow = IsNever<never>;
type IsNeverShow2 = IsNever<"never">;

// any的特性
type TestAny<T> = T extends number ? 1 : 2;
type TestAnyRes = TestAny<any>; // 合并

// 判断元组tuple
type IsTuple<T> = T extends readonly [...params: infer Eles]
  ? NotEqual<Eles["length"], number>
  : false;
type IsTuple2<T> = T extends unknown[]
  ? number extends T["length"]
    ? false
    : true
  : false;
type IsTupleShow = IsTuple2<["1", 2, 3]>;
type IsTupleShow2 = IsTuple2<any[]>;

// 类型之间是有父子关系的，更具体的那个是子类型，比如 A 和 B 的交叉类型 A & B 就是联合类型 A | B 的子类型，因为更具体。

// 如果允许父类型赋值给子类型，就叫做逆变。

// 如果允许子类型赋值给父类型，就叫做协变。

type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;
type UnionToIntersectionShow = UnionToIntersection<{ a: "a" } | { b: "b" }>;

// getOptional
// 如何提取索引类型中的可选索引？
// 可选索引就是undefined和值类型的联合类型
type OptionalObj = {
  name: string;
  age?: number;
};

type GetOptional<Obj extends Record<string, any>> = {
  [Key in keyof Obj as {} extends Pick<Obj, Key> ? Key : never]: Obj[Key];
};
type GetRequired<Obj extends Record<string, any>> = {
  [Key in keyof Obj as {} extends Pick<Obj, Key> ? never : Key]: Obj[Key];
};
type GetOptionalRes = GetOptional<OptionalObj>;

// 索引签名  索引签名不能构成字符串字面量，因为他没有名字  而其他索引可以
type RemoveIndexSignature<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];
};

// Class的public属性： keyof只能拿到class的public索引
class Dong {
  public name: string;
  protected age: number;
  private hobbies: string[];

  constructor() {
    this.name = "dong";
    this.age = 20;
    this.hobbies = ["sleep", "eat"];
  }
}
type showPublic = keyof Dong;
