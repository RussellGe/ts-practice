type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]] : P
} 
// function tupleToObject(array) {
//     const obj = {}
//     for( const i in array) {
//         obj[i] = i
//     }
//     return obj
// }