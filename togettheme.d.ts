import togetprop = require('togetprop');

declare module 'togettheme' {
  type CreatePropPathTag = ReturnType<typeof togetprop>;
  type DefaultValues = typeof togetprop extends (
    _: any,
    defaultValue: infer R
  ) => CreatePropPathTag
    ? R
    : never;

  function togettheme(defaultValue?: DefaultValues): CreatePropPathTag;
  export = togettheme;
}
