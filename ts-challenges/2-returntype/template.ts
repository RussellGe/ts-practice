type MyReturnType<T extends Function> = T extends (...args) => infer ReturnType ? ReturnType : never