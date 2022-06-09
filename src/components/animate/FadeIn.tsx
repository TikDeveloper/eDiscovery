import { FC, memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from 'styles/animation';

type FadeInProps = {
  children: ReactNode;
};

const FadeIn: FC<FadeInProps> = ({ children }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default memo(FadeIn);
