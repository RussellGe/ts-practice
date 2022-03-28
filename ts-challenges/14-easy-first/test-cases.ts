import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type F<T extends any[]> = T[0]
type t = F<[]>
// 如果接收空数组，这里得到的值是undefined

type arr1 = [2,3,1]
type arr2 = [2,3,1, 1]
type r = arr1 extends arr2 ? 1 :2

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]