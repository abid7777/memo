import { format } from 'timeago.js';
import PropTypes from 'prop-types';
import React from 'react';

function RelativeDate({ dateTime }) {
  return (
    <div className="text-xs italic text-gray-400">{format(dateTime)}</div>
  );
}

RelativeDate.propTypes = {
  dateTime: PropTypes.string.isRequired,
};

export default RelativeDate;
