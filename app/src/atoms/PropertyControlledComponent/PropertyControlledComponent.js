import PropTypes from 'prop-types';

function PropertyControlledComponent({ children, shouldRender }) {
  return shouldRender ? children : null;
}

PropertyControlledComponent.propTypes = {
  children: PropTypes.node.isRequired,
  shouldRender: PropTypes.bool,
};

PropertyControlledComponent.defaultProps = {
  shouldRender: false,
};

export default PropertyControlledComponent;
