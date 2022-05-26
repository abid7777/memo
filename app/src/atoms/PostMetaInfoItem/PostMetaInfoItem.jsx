import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

function PostMetaItem({ children, onClick }) {
  return (
    <button
      type="button"
      className="group inline-flex flex-row-reverse items-center mt-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

PostMetaItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

PostMetaItem.defaultProps = {
  onClick: _noop,
};

export default PostMetaItem;
