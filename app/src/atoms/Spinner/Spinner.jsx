import { CgSpinner } from 'react-icons/cg';
import PropTypes from 'prop-types';
import React from 'react';

function Spinner({ size }) {
  return (
    <CgSpinner className="animate-spin" size={size} />
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 36,
};

export default Spinner;
