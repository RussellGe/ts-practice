import { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const; //as const 意味着这个数组元素不可修改

//1. 字面量类型
type r = typeof tuple
let str = '123'
const strC = '234'
type s = typeof str // string
type sc = typeof strC // string

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;


// const let   js世界
// type interface   类型世界

// typeof   ---> 将js中的东西转换成ts中的类型世界