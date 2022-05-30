import { format } from 'timeago.js';
import PropTypes from 'prop-types';
import React from 'react';

function RelativeDate({ className, dateTime }) {
  return <div className={`text-xs italic text-gray-400 ${className}`}>{format(dateTime)}</div>;
}

RelativeDate.propTypes = {
  className: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
};

RelativeDate.defaultProps = {
  className: '',
};

export default RelativeDate;
