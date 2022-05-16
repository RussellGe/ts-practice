type Naked<T> = T extends boolean ? "Y" : "N";
type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";

/*
 * 先分发到 Naked<number> | Naked<boolean>
 * 然后到 "N" | "Y"
 */
type Distributed = Naked<number | boolean>;

/*
 * 不会分发 直接是 [number | boolean] extends [boolean]
 * 然后是"N"
 */
type NotDistributed = Wrapped<number | boolean>;

type DistributedShow<T, S = T> = T extends S ? [S] : never;

type a = DistributedShow<[1 | 3 | 4]>;
type b = DistributedShow<1 | 3 | 4>;
