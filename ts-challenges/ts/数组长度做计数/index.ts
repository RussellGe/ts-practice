/** 在TS中没有加减乘除运算符，所以我们用数组类型的length
 * 取值做加减乘除运算 */

/** 数组长度做计数 */
// 加法
type BuildArrRes = BuildArr<10, unknown>;
type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArr<Num1, unknown>,
  ...BuildArr<Num2, unknown>
]["length"];
type AddRes = Add<32, 32>; // 数值太大的话会报错

// 减法
type Subtract<Num1 extends number, Num2 extends number> = BuildArr<
  Num1,
  unknown
> extends [...arr1: BuildArr<Num2, unknown>, ...arr2: infer Rest]
  ? Rest["length"]
  : never;
type SubTractRes = Subtract<32, 17>;

// 乘法
type Multiply<
  Num1 extends number,
  Num2 extends number,
  ResultArr extends unknown[] = []
> = Num2 extends 0
  ? ResultArr["length"]
  : Multiply<Num1, Subtract<Num2, 1>, [...BuildArr<Num1>, ...ResultArr]>;
type MultiplyRes = Multiply<3, 12>;

// 除法
type Divide<
    Num1 extends number,
    Num2 extends number,
    CountArr extends unknown[] = []
> = Num1 extends 0 ? CountArr['length']
        : Divide<Subtract<Num1, Num2>, Num2, [unknown, ...CountArr]>;
type DivideRes = Divide<30, 5>

type StrLen<
    Str extends string,
    CountArr extends unknown[] = []
> = Str extends `${string}${infer Rest}` 
    ? StrLen<Rest, [...CountArr, unknown]> 
    : CountArr['length']

type StrLenRes = StrLen<'4312432143214312'>