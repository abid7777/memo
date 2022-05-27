import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import CommentForm from '../molecules/CommentForm';
import PostCommentList from '../organisms/PostCommentList';
import PropertyControlledComponent from '../atoms/PropertyControlledComponent';

import useResize from '../hooks/useResize';

function PostCommentTemplate({ comments }) {
  const { isMobileDevice } = useResize();
  const [isCommentVisible, setIsCommentVisible] = useState(!isMobileDevice);

  useEffect(() => setIsCommentVisible(!isMobileDevice), [isMobileDevice]);

  return (
    <AnimatePresence>
      {/* <PropertyControlledComponent shouldRender={isCommentVisible}> */}
      {isCommentVisible && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className={cx({ 'fixed top-0 left-0 z-40 w-screen h-screen bg-gray-800/50 backdrop-blur-lg': isMobileDevice })}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: '100%', opacity: 0 }}
          className={cx({ 'overflow-auto fixed inset-x-0 bottom-0 z-50 m-auto w-[95%] h-[90%] bg-stone-50 rounded-t-lg shadow-2xl': isMobileDevice })}
        >
          <div className="m-4">
            <div className="mt-8">
              <CommentForm isMobileDevice={isMobileDevice} />
            </div>
            <div className="mt-8">
              <PostCommentList comments={comments} />
            </div>
          </div>
        </motion.div>
      </>
      )}
      {/* </PropertyControlledComponent> */}
    </AnimatePresence>
  );
}

PostCommentTemplate.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostCommentTemplate;
