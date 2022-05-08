type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
} &
  {
    readonly [P in K]: T[P];
  };
type a = MyReadonly2<Todo1, "title" | "description">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}
