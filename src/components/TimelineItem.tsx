import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  link?: string;
  items?: string[];
  children?: React.ReactNode;
  icon?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, location, link, items, children, icon = '💼' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Vertical Line */}
      <div className="absolute left-[11px] top-0 h-full w-[2px] bg-slate-200 dark:bg-slate-700 last:hidden"></div>
      
      {/* Dot */}
      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 flex items-center justify-center z-10 text-xs shadow-[0_0_10px_rgba(59,130,246,0.3)]">
        {icon}
      </div>

      <div className="bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover-lift">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h3>
              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  aria-label={`View ${title} source`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{subtitle}</p>
          </div>
          <div className="md:text-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wider uppercase border border-blue-100 dark:border-blue-800">
              {period}
            </span>
            {location && (
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 font-medium flex md:justify-end items-center gap-1">
                <span>📍</span> {location}
              </p>
            )}
          </div>
        </div>
        
        {items && items.length > 0 && (
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
