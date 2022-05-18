type RemoveIndexSignature<T> = {
  [k in keyof T as k extends `${infer Str}` ? Str : never]: T[k];
};
