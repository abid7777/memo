import PropTypes from 'prop-types';
import React from 'react';

function Badge({ count }) {
  return (
    <div className="flex justify-center items-center w-6 h-6 text-xs text-slate-50 bg-red-600 rounded-full">
      {count}
    </div>
  );
}

Badge.propTypes = {
  count: PropTypes.number,
};

Badge.defaultProps = {
  count: 0,
};

export default Badge;
