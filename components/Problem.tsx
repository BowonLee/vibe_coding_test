'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiHelpCircle, FiHeart, FiUsers } from 'react-icons/fi'

const problems = [
  {
    icon: FiHelpCircle,
    title: '"내가 지금 잘하고 있는지" 알 수 없음',
    description: '기존 앱은 숫자와 그래프만 제공합니다. "이 페이스가 좋은 건지", "목표 달성 가능한지" 판단할 수 없어요.',
    testimonial: {
      text: '"2번 뛴 게 의미 있는 건지 모르겠어요"',
      author: '민준, 29세 개발자',
    },
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: FiHeart,
    title: '하루 실패하면 챌린지 전체 실패',
    description: '완벽주의를 강요하는 시스템. 야근으로 하루 못 뛰었더니 21일 챌린지가 0일로 리셋됐어요.',
    testimonial: {
      text: '"야근으로 하루 못 뛰었더니 21일 챌린지가 0일로 리셋됐어요"',
      author: '민준, 29세 개발자',
    },
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: FiUsers,
    title: '혼자 달리면 3일 만에 포기',
    description: '친구들과 비교만 되고 함께할 수 없어요. 동료들도 못 하고 있는데 그 사실을 몰라서 외로웠어요.',
    testimonial: {
      text: '"친구들과 비교만 되고 함께할 수 없어요"',
      author: '지우, 25세 MD',
    },
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
]

export default function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            러닝 앱의 문제점
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            작심삼일로 끝나는 이유를 찾았습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${problem.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`${problem.color} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {problem.description}
                </p>
                <div className="border-l-4 border-primary pl-4 italic text-gray-700 dark:text-gray-200">
                  <p className="mb-2">"{problem.testimonial.text}"</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    - {problem.testimonial.author}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

