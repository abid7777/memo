export const VARIANTS = Object.freeze({
  DANGER: 0,
  TRANSPARENT: 1,
});

export const STYLES = Object.freeze({
  [VARIANTS.DANGER]: 'bg-red-200 text-red-600',
  [VARIANTS.TRANSPARENT]: 'bg-white text-red-600 shadow-none rounded-none',
});
