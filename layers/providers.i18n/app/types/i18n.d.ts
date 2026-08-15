export type MaybeLocaleKey<T = string> =
    | T
    | {
          readonly localeKey: string;
          readonly params?: Record<string, unknown>;
      };