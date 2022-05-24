// Parameters用于提取函数的类型参数
// type Parameters<T extends (...args: any) => any> 
//     = T extends (...args: infer P) => any 
//         ? P 
//         : never;
type ParametersRes = Parameters<(name:string, age:number) => {}>

// ReturnType用于提取函数类型的返回值
// type ReturnType<T extends (...args: any) => any> 
//     = T extends (...args: any) => infer R 
//         ? R 
//         : any;
type ReturnTypeRes = ReturnType<() => 'apple'>
