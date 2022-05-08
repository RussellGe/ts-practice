interface IPerson {
    name: string;
    age: number
}

class Person implements IPerson {
    name: string
    age: number
    job: Array<string>
}

interface SayHello {
    (name: string): string,
}

const func: SayHello = (myName: string) => {
    return 'hello, ' + myName
} 


type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? T : never;
//这里的extends不是条件而是约束
type res = First<[1,2,3]>; // 1


type ObjType = {a: number } & {c: boolean};
type Intersection = (number | string) & number // number

const a: ObjType = {
    a: 100,
    c: true
}