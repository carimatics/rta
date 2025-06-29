export const Language = {
  Ja: 1,
  En: 2,
} as const;
export type Language = (typeof Language)[keyof typeof Language];
