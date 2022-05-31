import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, {
  useEffect, useMemo, useState,
} from 'react';
import cx from 'classnames';
import _get from 'lodash/get';

import Alert, { VARIANTS as ALERT_VARIANTS } from '../molecules/Alert';
import { TRANSITION, visiblityAnimationVariants } from '../App.constants';
import Backdrop from '../atoms/Backdrop/Backdrop';
import Post from '../organisms/Post';
import PostCommentTemplate from './PostComment.template';
import PostSkeleton from '../skeletons/Post.skeleton';
import usePost from '../hooks/api/usePost';
import useResize from '../hooks/useResize';
import withReactQueryErrorBoundary from '../hocs/withReactQueryErrorBoundary';
import withSuspense from '../hocs/withSuspense';

const errorMessages = {
  404: {
    title: 'Not Found',
    body: 'Post not Available or Deleted by the Author',
  },
  default: {
    title: 'Internal Error',
    body: 'Something went wrong while fetching this post.',
  },
};

function PostErrorDialog({ resetErrorBoundary, error }) {
  const postErrorMessage = errorMessages[error.statusCode] || errorMessages.default;

  return (
    <Alert
      variant={ALERT_VARIANTS.DANGER}
      title={postErrorMessage.title}
      body={postErrorMessage.body}
      onTryAgain={resetErrorBoundary}
    />
  );
}

function PostTemplate({ postID }) {
  const { data } = usePost(postID);
  const { isMobileDevice } = useResize();
  const [isCommentVisible, setIsCommentVisible] = useState(!isMobileDevice);
  const commentsVariants = useMemo(() => ({
    hidden: { opacity: 0, y: isMobileDevice ? '100%' : '0%', transition: TRANSITION },
    visible: { opacity: 1, y: '0%', transition: TRANSITION },
    exit: { y: '100%', transition: TRANSITION },
  }), [isMobileDevice]);

  useEffect(() => setIsCommentVisible(!isMobileDevice), [isMobileDevice]);

  return (
    <div>
      <div className="pb-8 mb-8 border-b border-b-gray-200">
        <Post
          post={_get(data, 'post')}
          onCommentClick={() => setIsCommentVisible(true)}
        />
      </div>
      <div>
        <AnimatePresence>
          {
            isMobileDevice
              && isCommentVisible
              && (
                <Backdrop
                  key="comment-modal-backdrop"
                  as={motion.div}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={visiblityAnimationVariants}
                  onClick={() => setIsCommentVisible(false)}
                />
              )
          }
          {
            isCommentVisible
              && (
                <motion.div
                  key="comment-modal"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={commentsVariants}
                  className={cx({ 'overflow-auto fixed inset-x-0 bottom-0 z-50 m-auto w-[95%] h-[90%] bg-stone-50 rounded-t-lg shadow-2xl': isMobileDevice })}
                >
                  <PostCommentTemplate postID={postID} isMobileDevice={isMobileDevice} />
                </motion.div>
              )
            }
        </AnimatePresence>
      </div>
    </div>
  );
}

PostErrorDialog.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
  error: PropTypes.shape({
    statusCode: PropTypes.number,
  }).isRequired,
};

PostTemplate.propTypes = {
  postID: PropTypes.string.isRequired,
};

export default withReactQueryErrorBoundary(
  withSuspense(PostTemplate, <PostSkeleton />),
  PostErrorDialog,
);
