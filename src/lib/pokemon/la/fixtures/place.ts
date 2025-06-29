export const Place = {
  Village: 1,
  DiamondSettlement: 2,
  PearlSettlement: 3,
  Retreat: 4,
  Fieldlands: 5,
  Mirelands: 6,
  Coastlands: 7,
  Highlands: 8,
  Icelands: 9,
} as const;
export type Place = (typeof Place)[keyof typeof Place];
