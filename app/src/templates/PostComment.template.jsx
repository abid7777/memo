import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';

import { visiblityAnimationVariants } from '../App.constants';
import CommentForm from '../molecules/CommentForm';
import PostCommentList from '../organisms/PostCommentList';
import Spinner from '../atoms/Spinner';
import useComment from '../hooks/api/useComment';
import withReactQueryErrorBoundary from '../hocs/withReactQueryErrorBoundary';
import withSuspense from '../hocs/withSuspense';

function CommentSpinner() {
  return <div className="flex justify-center items-center mt-8 lg:mt-0"><Spinner /></div>;
}

function PostCommentTemplate({ postID, isMobileDevice }) {
  const { data } = useComment(postID);

  return (
    <motion.div
      variants={visiblityAnimationVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="m-4"
    >
      <div className="mt-8">
        <CommentForm isMobileDevice={isMobileDevice} />
      </div>
      <div className="mt-8">
        <PostCommentList comments={_get(data, 'comments', [])} />
      </div>
    </motion.div>
  );
}

PostCommentTemplate.propTypes = {
  postID: PropTypes.string.isRequired,
  isMobileDevice: PropTypes.bool,
};

PostCommentTemplate.defaultProps = {
  isMobileDevice: false,
};

export default withReactQueryErrorBoundary(
  withSuspense(PostCommentTemplate, <CommentSpinner />),
  () => console.log('??'),
);
