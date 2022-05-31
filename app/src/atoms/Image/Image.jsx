import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { visiblityAnimationVariants } from '../../App.constants';
import Skeleton from '../Skeleton';

function Image({
  alt, className, height, loading, src, width,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new window.Image(width, height);
    image.src = src;
    image.onload = () => setIsLoading(false);

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <AnimatePresence>
      {
        isLoading && (
          <motion.div
            key="image-loader"
            variants={visiblityAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Skeleton className={cx('aspect-square object-cover w-full h-full', className)} />
          </motion.div>
        )
      }
      {
        !isLoading && (
          <motion.img
            key="image-loader"
            alt={alt}
            className={cx('aspect-square object-cover', className)}
            height={height}
            loading={loading}
            src={src}
            width={width}
            variants={visiblityAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )
      }
    </AnimatePresence>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  loading: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  width: 'auto',
  height: 'auto',
  loading: 'auto',
};

export default Image;
