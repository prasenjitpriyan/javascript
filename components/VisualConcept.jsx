'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const VisualConcept = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 p-4">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Side */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-square max-w-[300px]">
              <Image
                src={imageSrc}
                alt={`Visual explanation of ${title}`}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </motion.div>
          </div>

          {/* Explanation Side */}
          <div className="p-8 flex flex-col justify-center space-y-4">
            <div className="inline-block px-3 py-1 bg-minion-yellow/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
              Visual Definition
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {description}
            </p>
            <div className="pt-4">
              <div className="p-4 bg-gray-100 dark:bg-black/40 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 border-l-4 border-minion-yellow">
                {'// Code Representation'} <br />
                <span className="text-purple-600 dark:text-purple-400">
                  let
                </span>{' '}
                myVar ={' '}
                <span className="text-green-600 dark:text-green-400">
                  &quot;Hello World&quot;
                </span>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualConcept;
