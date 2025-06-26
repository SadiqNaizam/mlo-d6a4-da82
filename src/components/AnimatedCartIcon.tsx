import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface AnimatedCartIconProps {
  itemCount: number;
}

const AnimatedCartIcon: React.FC<AnimatedCartIconProps> = ({ itemCount }) => {
  const controls = useAnimationControls();
  const prevItemCount = useRef(itemCount);

  console.log('AnimatedCartIcon loaded');

  useEffect(() => {
    // Trigger animation only when the item count increases
    if (itemCount > prevItemCount.current) {
      controls.start('jiggle');
    }
    // Update the ref to the current count for the next render
    prevItemCount.current = itemCount;
  }, [itemCount, controls]);

  const animationVariants = {
    jiggle: {
      rotate: [0, -15, 10, -10, 5, 0],
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <Link to="/cart" className="relative inline-block" aria-label={`View cart with ${itemCount} items`}>
      <motion.div
        className="relative"
        variants={animationVariants}
        animate={controls}
      >
        {/* The 4D Pocket */}
        <div className="w-20 h-10 bg-gray-50 border-2 border-b-4 border-gray-800 rounded-t-full flex items-center justify-center overflow-hidden shadow-lg transition-transform hover:scale-110">
           {/* The Bell */}
          <div className="relative top-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-black mx-auto flex flex-col items-center justify-end p-0.5 shadow-sm">
            <div className="w-4/5 h-px bg-black mb-0.5"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {itemCount > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-3 w-6 h-6 flex items-center justify-center rounded-full p-0 border-2 border-white animate-in zoom-in"
        >
          {itemCount}
        </Badge>
      )}
    </Link>
  );
};

export default AnimatedCartIcon;