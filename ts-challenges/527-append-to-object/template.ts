type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V;
};
type test1 = {
  key: "cat";
  value: "green";
};

type test = AppendToObject<test1, "home", boolean>;
