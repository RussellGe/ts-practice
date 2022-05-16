type AnyOf<T extends readonly any[]> = T[number] extends
  | Record<string, never>
  | ""
  | false
  | []
  | 0
  | null
  | undefined
  ? false
  : true;