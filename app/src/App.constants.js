export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = Object.freeze({});
export const TRANSITION = Object.freeze({
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
});
export const visiblityAnimationVariants = {
  hidden: { opacity: 0, transition: TRANSITION },
  visible: { opacity: 1, transition: TRANSITION },
};
