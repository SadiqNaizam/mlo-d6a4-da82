import React from 'react';
import { motion } from 'framer-motion';

interface ThematicPageTransitionProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that provides a thematic "Anywhere Door" style animation
 * for page content. It animates its children on mount.
 * To achieve true exit/enter animations between routes, this component's logic
 * would need to be integrated with `AnimatePresence` in a parent layout component
 * that wraps the router's outlet, which is beyond the scope of generating a single component.
 */
const ThematicPageTransition: React.FC<ThematicPageTransitionProps> = ({ children }) => {
  console.log('ThematicPageTransition loaded');

  // Defines the animation, simulating a portal opening from the center.
  const anywhereDoorVariants = {
    // The state before the component mounts
    initial: {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
    },
    // The state the component animates to
    animate: {
      clipPath: 'circle(150% at 50% 50%)',
      opacity: 1,
    },
    // The state when the component exits (requires AnimatePresence in a parent)
    exit: {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
    }
  };

  // Defines the timing and easing of the animation
  const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.7,
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={anywhereDoorVariants}
      transition={transition}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default ThematicPageTransition;