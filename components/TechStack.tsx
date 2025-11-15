'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiShield, FiZap, FiCloud } from 'react-icons/fi'

const techStack = [
  {
    name: 'Next.js 14+',
    category: 'Frontend & Backend',
    description: 'App Router, Server Components, API Routes',
    icon: FiCode,
    color: 'text-gray-900 dark:text-white',
  },
  {
    name: 'Supabase',
    category: 'Database & Auth',
    description: 'PostgreSQL, Row Level Security, Realtime',
    icon: FiDatabase,
    color: 'text-green-600 dark:text-green-400',
  },
  {
    name: 'OpenAI',
    category: 'AI Integration',
    description: 'GPT-4o-mini for progress analysis',
    icon: FiZap,
    color: 'text-purple-600 dark:text-purple-400',
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    description: 'Optimized Next.js hosting',
    icon: FiCloud,
    color: 'text-blue-600 dark:text-blue-400',
  },
]

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            현대적이고 검증된 기술로 구축했습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`${tech.color} mb-4 flex justify-center`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {tech.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tech.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            아키텍처 다이어그램
          </h3>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/20 rounded-lg p-4 mb-2">
                  <p className="font-semibold text-gray-900 dark:text-white">Frontend</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Next.js 14+</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-lg p-4 mb-2">
                  <p className="font-semibold text-gray-900 dark:text-white">Backend</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">API Routes</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-accent/20 rounded-lg p-4 mb-2">
                  <p className="font-semibold text-gray-900 dark:text-white">Database</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Supabase</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-4 inline-block">
                <p className="font-semibold text-gray-900 dark:text-white">AI Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">OpenAI GPT-4o-mini</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

