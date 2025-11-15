'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-primary/20 dark:via-[#1A1A1A] dark:to-secondary/20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            작심삼일로 끝나는 러닝을
            <br />
            <span className="text-primary">평생 습관</span>으로 만드는
            <br />
            AI 동반자
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            실시간 AI 피드백과 유연한 챌린지로 꾸준히 달리세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToCTA}
            className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            베타 신청하기
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold text-lg hover:border-primary transition-all duration-300 flex items-center gap-2"
          >
            <FiGithub className="w-5 h-5" />
            GitHub 보기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                앱 UI 모킹업 영역
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

