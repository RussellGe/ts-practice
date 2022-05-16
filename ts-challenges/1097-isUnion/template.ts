//T extends S会把联合类型 分发 单独处理
type IsUnion<T, S = T> = T extends S ? ([S] extends [T] ? false : true) : never;