import { CgDanger } from 'react-icons/cg';
import { IoMdRefresh } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';

import Button, { VARIANTS } from '../atoms/Button';
import ErrorDialog from '../molecules/ErrorDialog';
import RelatedPostList from '../organisms/RelatedPostList';
import Spinner from '../atoms/Spinner';
import useRelatedPost from '../hooks/api/useRelatedPost';
import withReactQueryErrorBoundary from '../hocs/withReactQueryErrorBoundary';
import withSuspense from '../hocs/withSuspense';

function RelatedPostErrorDialog({ resetErrorBoundary }) {
  return (
    <ErrorDialog>
      <div className="flex gap-2 justify-center items-center mb-8 text-red-400 lg:justify-start">
        <CgDanger />
        <span>Couldn&apos;t fetch Related posts</span>
      </div>
      <div className="flex justify-center items-center lg:justify-start">
        <Button
          className="flex gap-1 justify-center items-center"
          variant={VARIANTS.DANGER}
          onClick={resetErrorBoundary}
        >
          <span>Try Again</span>
          <IoMdRefresh />
        </Button>
      </div>
    </ErrorDialog>
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
