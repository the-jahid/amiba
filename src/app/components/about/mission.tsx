'use client'

import { motion } from 'framer-motion'


const Mission = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 md:p-12">
    
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            AMIBA's mission is to develop adaptable AI tools and platforms that:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="list-disc list-inside mb-8 space-y-4 text-gray-700"
          >
            <li>Support skill development in artificial intelligence.</li>
            <li>Enhance project management through innovative solutions like the Amiba Bot.</li>
            <li>Build a collaborative global community to unlock opportunities and solve societal challenges.</li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            By prioritizing sustainability, ethical practices, and societal impact, AMIBA aims to transition
            from a materialistic economy to one rooted in intangible assets like knowledge, skills, and
            innovation.
          </motion.p>

        </div>
      </motion.div>
    </div>
  )
}

export default Mission

