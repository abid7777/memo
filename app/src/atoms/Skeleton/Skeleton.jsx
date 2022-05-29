import PropTypes from 'prop-types';
import React from 'react';

function Skeleton({ className }) {
  return (
    <div className={`w-full h-7 text-transparent bg-gray-200 animate-pulse ${className}`} />
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: '',
};

export default Skeleton;
