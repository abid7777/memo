import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import Button, { VARIANTS } from '../../atoms/Button';

function PostMetaItem({ children, onClick }) {
  return (
    <Button
      className="group inline-flex flex-row-reverse items-center mt-4"
      variant={VARIANTS.LINK}
      onClick={onClick}
    >
      {children}
    </Button>
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
