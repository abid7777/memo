import PropTypes from 'prop-types';
import React from 'react';

function Image({
  className, src, alt, width, height, loading,
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
    />
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
