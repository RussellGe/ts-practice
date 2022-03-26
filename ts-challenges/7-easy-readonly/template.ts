type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

//in 用于遍历    keyof是lookup关键词，用于查找T中的所有key

// // js
// function Readonly(obj) {
//     const res = {}
//     for(const key in obj) {
//         res["readonly" + key] = obj[key]
//     }
//     return res
// }