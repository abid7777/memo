import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';

import { TRANSITION } from '../App.constants';
import Backdrop from '../atoms/Backdrop/Backdrop';
import Button from '../atoms/Button';
import Post from '../organisms/Post';
import PostCommentTemplate from './PostComment.template';
import PropertyControlledComponent from '../atoms/PropertyControlledComponent';
import RelatedPostList from '../organisms/RelatedPostList';
import useResize from '../hooks/useResize';

const backdropVariants = {
  hidden: { opacity: 0, transition: TRANSITION },
  visible: { opacity: 1, transition: TRANSITION },
};

function PostDetailTemplate({ postID }) {
  const { isMobileDevice } = useResize();
  const [isCommentVisible, setIsCommentVisible] = useState(!isMobileDevice);
  const commentsVariants = useMemo(() => ({
    hidden: { opacity: 0, y: isMobileDevice ? '100%' : 'auto', transition: TRANSITION },
    visible: { opacity: 1, y: isMobileDevice ? '0%' : 'auto', transition: TRANSITION },
    exit: { y: '100%', transition: TRANSITION },
  }), [isMobileDevice]);

  useEffect(() => setIsCommentVisible(!isMobileDevice), [isMobileDevice]);

  return (
    <div className="block lg:flex lg:gap-5">
      <div className="mb-4 w-full lg:mb-0 lg:w-4/6">
        <div className="pb-8 mb-8 border-b border-b-gray-200">
          <Post postID={postID} />
        </div>
        <div>
          <PropertyControlledComponent shouldRender={isMobileDevice}>
            <Button onClick={() => setIsCommentVisible(!isCommentVisible)}>Comment</Button>
          </PropertyControlledComponent>
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
                    variants={backdropVariants}
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
      <div className="relative ml-auto w-full lg:w-2/6">
        <RelatedPostList postID={postID} />
      </div>
    </div>
  );
}

PostDetailTemplate.propTypes = {
  postID: PropTypes.string.isRequired,
};

export default PostDetailTemplate;
