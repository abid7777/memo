import { AiOutlinePlus } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import cx from 'classnames';

import { TRANSITION, visiblityAnimationVariants } from '../App.constants';
import Backdrop from '../atoms/Backdrop/Backdrop';
import Button, { VARIANTS } from '../atoms/Button';
import PostForm from '../organisms/PostForm';

const postFormVariants = {
  hidden: {
    opacity: 0, y: '100%', transition: TRANSITION,
  },
  visible: {
    opacity: 1, y: '-1rem', transition: TRANSITION,
  },
};

function PostFormTemplate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute">
      <AnimatePresence>
        {
          isOpen && (
            <Backdrop
              key="comment-modal-backdrop"
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={visiblityAnimationVariants}
              onClick={() => setIsOpen(false)}
            />
          )
        }
        {
          isOpen && (
            <motion.div
              key="post-form"
              variants={postFormVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="overflow-auto fixed inset-x-0 bottom-20 z-50 p-4 mx-auto w-[95%] max-h-[80%] bg-slate-50 rounded-md border shadow-2xl md:right-5 md:left-auto md:mx-[inherit] md:w-3/6 xl:w-2/6"
            >
              <PostForm />
            </motion.div>
          )
        }
      </AnimatePresence>
      <Button
        variant={VARIANTS.PRIMARY}
        rounded
        className="fixed right-5 bottom-5 z-50 mx-auto w-12 h-12 shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlinePlus className={cx('transition-transform', { 'rotate-45': isOpen })} />
      </Button>
    </div>
  );
}

export default PostFormTemplate;
