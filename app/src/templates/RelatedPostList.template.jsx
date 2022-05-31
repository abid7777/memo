import { CgDanger } from 'react-icons/cg';
import { IoMdRefresh } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';

import Alert, { VARIANTS as ALERT_VARIANTS } from '../molecules/Alert';
import Button, { VARIANTS as BUTTON_VARIANTS } from '../atoms/Button';
import RelatedPostList from '../organisms/RelatedPostList';
import Spinner from '../atoms/Spinner';
import useRelatedPost from '../hooks/api/useRelatedPost';
import withReactQueryErrorBoundary from '../hocs/withReactQueryErrorBoundary';
import withSuspense from '../hocs/withSuspense';

function RelatedPostBodyDialog({ onTryAgain }) {
  return (
    <div>
      <div className="flex gap-1 justify-center items-center lg:justify-start">
        <CgDanger />
        <span>
          Error while fetching
          {' '}
          <span className="font-bold">Related</span>
          {' '}
          posts.
        </span>
      </div>
      <div className="mt-4">
        <Button
          className="flex gap-1 justify-center items-center mx-auto text-red-700 bg-red-300 lg:mx-0"
          variant={BUTTON_VARIANTS.DANGER}
          onClick={onTryAgain}
        >
          <span>Try Again</span>
          <IoMdRefresh />
        </Button>
      </div>
    </div>
  );
}

function RelatedPostErrorDialog({ resetErrorBoundary }) {
  return (
    <Alert
      className="p-0"
      variant={ALERT_VARIANTS.TRANSPARENT}
      renderBody={RelatedPostBodyDialog}
      onTryAgain={resetErrorBoundary}
    />
  );
}

function RelatedPostSpinner() {
  return <div className="flex justify-center items-center mt-8 lg:mt-0"><Spinner /></div>;
}

function RelatedPostListTemplate({ postID }) {
  const { data } = useRelatedPost(postID);

  return <RelatedPostList posts={_get(data, 'posts', [])} />;
}

RelatedPostErrorDialog.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
};

RelatedPostListTemplate.propTypes = {
  postID: PropTypes.string.isRequired,
};

export default withReactQueryErrorBoundary(
  withSuspense(RelatedPostListTemplate, <RelatedPostSpinner />),
  RelatedPostErrorDialog,
);
