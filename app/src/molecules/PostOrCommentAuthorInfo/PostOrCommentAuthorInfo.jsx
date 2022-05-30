import PropTypes from 'prop-types';
import React from 'react';

import DateTimeInfo from '../../atoms/DateTimeInfo';

function PostOrCommentAuthorInfo({
  authorClassName, dateTime, dateTimeClassName, name,
}) {
  return (
    <>
      <h3 className={`text-xl ${authorClassName}`}>{name}</h3>
      <DateTimeInfo dateTime={dateTime} className={dateTimeClassName} />
    </>
  );
}

PostOrCommentAuthorInfo.propTypes = {
  authorClassName: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
  dateTimeClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
};

PostOrCommentAuthorInfo.defaultProps = {
  authorClassName: '',
  dateTimeClassName: '',
};

export default PostOrCommentAuthorInfo;
