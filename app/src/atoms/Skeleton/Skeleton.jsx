import PropTypes from 'prop-types';
import React from 'react';

function Skeleton({ className }) {
  return (
    <div className={`w-full text-transparent bg-gray-200 animate-pulse ${className}`} />
  );
}

Skeleton.generate = (n = 0, className = '') => {
  const skeletons = [];

  for (let i = 0; i < n; i += 1) {
    skeletons.push(<Skeleton key={i} className={className} />);
  }

  return skeletons;
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: '',
};

export default Skeleton;
