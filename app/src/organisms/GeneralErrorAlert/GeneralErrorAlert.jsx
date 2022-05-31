import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import Alert, { VARIANTS as ALERT_VARIANTS } from '../../molecules/Alert';
import Button, { VARIANTS as BUTTON_VARIANTS } from '../../atoms/Button';

function ErrorBody({ errorTarget, onTryAgain }) {
  return (
    <div>
      <p>
        Error while fetching
        {' '}
        <span className="font-bold">{errorTarget}</span>
      </p>
      <p className="mt-4 italic underline">Possible reasons</p>
      <ul className="mt-4">
        <li className="before:mr-1 before:content-['-']">
          Since this Webapp hosted on a Free plan, the Quota might have been exhausted.
        </li>
        <li className="before:mr-1 before:content-['-']">
          Congratulations, you might have found a bug!
        </li>
      </ul>
      <p className="mt-8 italic font-bold">
        In either case, an error report is sent to the developer.
      </p>
      <div className="mt-4">
        <Button variant={BUTTON_VARIANTS.DANGER} onClick={onTryAgain}>Try Again</Button>
      </div>
    </div>
  );
}

function GeneralErrorAlert({ errorTarget, resetErrorBoundary }) {
  return (
    <Alert
      errorTarget={errorTarget}
      renderBody={ErrorBody}
      title="Error"
      variant={ALERT_VARIANTS.DANGER}
      onTryAgain={resetErrorBoundary}
    />
  );
}

ErrorBody.propTypes = {
  onTryAgain: PropTypes.func,
  errorTarget: PropTypes.string.isRequired,
};

ErrorBody.defaultProps = {
  onTryAgain: _noop,
};

GeneralErrorAlert.propTypes = {
  errorTarget: PropTypes.string.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default GeneralErrorAlert;
