import { FC, memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeTop } from 'styles/animation';

type FadeTopProps = {
  children: ReactNode;
};

const FadeTop: FC<FadeTopProps> = ({ children }) => {
  return (
    <motion.div variants={fadeTop} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default memo(FadeTop);
