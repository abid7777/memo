import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

function Backdrop({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`fixed top-0 left-0 z-40 w-screen h-screen bg-gray-800/50 backdrop-blur-lg ${className}`}
    />
  );
}

Backdrop.propTypes = {
  className: PropTypes.string,
};

Backdrop.defaultProps = {
  className: '',
};

export default Backdrop;
