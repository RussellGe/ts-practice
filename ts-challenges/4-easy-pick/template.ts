// ts联合类型 union

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// js版
function myPick(todo, keys) {
    const obj = {}
    keys.forEach(key => {
        if(key in todo) {
          obj[key] = todo[key];
        }
    })
    return obj
}