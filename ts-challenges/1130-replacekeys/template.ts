type ReplaceKeys<U, T, Y> = U extends U
  ? {
      [K in keyof U]: K extends keyof U
        ? K extends T
          ? K extends keyof Y
            ? Y[K]
            : never
          : U[K]
        : never;
    }
  : never;
