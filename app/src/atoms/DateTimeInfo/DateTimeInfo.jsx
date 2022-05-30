import { format } from 'timeago.js';
import PropTypes from 'prop-types';
import React from 'react';

function DateTimeInfo({ className, dateTime }) {
  return <div className={`text-xs italic text-gray-400 ${className}`}>{format(dateTime)}</div>;
}

DateTimeInfo.propTypes = {
  className: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
};

DateTimeInfo.defaultProps = {
  className: '',
};

export default DateTimeInfo;
