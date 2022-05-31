import { CgDanger } from 'react-icons/cg';
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _isFunction from 'lodash/isFunction';

import { STYLES, VARIANTS } from './Alert.constants';
import PropertyControlledComponent from '../../atoms/PropertyControlledComponent';

function Alert(props) {
  const {
    body, className, title, variant, renderBody, renderTitle,
  } = props;

  return (
    <div className={`max-w-md mx-auto p-4 rounded-md shadow-lg ${_get(STYLES, variant, '')} ${className}`}>
      <PropertyControlledComponent shouldRender={title || _isFunction(renderTitle)}>
        <div>
          {
            _isFunction(renderTitle)
              ? renderTitle(props)
              : (
                <div className="flex gap-2 justify-start items-center pb-3 mb-3 text-lg border-b border-b-red-600">
                  <CgDanger />
                  {title}
                </div>
              )
          }
        </div>
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={body || _isFunction(renderBody)}>
        <div>
          {
            _isFunction(renderBody)
              ? renderBody(props)
              : <div>{body}</div>
          }
        </div>
      </PropertyControlledComponent>
    </div>
  );
}

Alert.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(VARIANTS)).isRequired,
  renderBody: PropTypes.func,
  renderTitle: PropTypes.func,
};

Alert.defaultProps = {
  body: '',
  className: '',
  title: '',
  renderBody: null,
  renderTitle: null,
};

export default Alert;
