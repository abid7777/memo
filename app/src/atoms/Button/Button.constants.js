export const VARIANTS = Object.freeze({
  PRIMARY: 0,
  DANGER: 1,
  LINK: 2,
});

export const STYLES = Object.freeze({
  [VARIANTS.PRIMARY]: 'text-slate-50 bg-gray-800',
  [VARIANTS.DANGER]: 'text-red-700 bg-red-300',
  [VARIANTS.LINK]: '',
});
