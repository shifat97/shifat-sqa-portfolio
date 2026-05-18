import React from 'react';
import { motion } from 'framer-motion';

interface SkillTagProps {
  name: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent hover:border-blue-500 hover:text-blue-500 transition-all duration-300 text-slate-700 dark:text-slate-300 font-medium text-sm cursor-default"
    >
      {name}
    </motion.div>
  );
};

export default SkillTag;
