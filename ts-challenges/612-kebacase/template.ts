type KebabCase<S extends string> = S extends `${infer F}${infer res}`
  ? `${Lowercase<F>}${res extends Uncapitalize<res>
      ? ""
      : "-"}${KebabCase<res>}`
  : "";
