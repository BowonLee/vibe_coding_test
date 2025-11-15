'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCheck, FiClock, FiCalendar } from 'react-icons/fi'

const roadmap = [
  {
    phase: 'MVP',
    period: 'Month 1-3',
    status: 'completed',
    icon: FiCheck,
    items: [
      '기본 러닝 트래킹',
      'AI 피드백 시스템',
      '유연한 챌린지',
      '마일스톤/레벨',
    ],
  },
  {
    phase: 'Post-MVP',
    period: 'Month 4-6',
    status: 'in-progress',
    icon: FiClock,
    items: [
      '팀 챌린지',
      '실시간 크루 매칭',
      'SNS 공유 최적화',
      '친구 초대 프로그램',
    ],
  },
  {
    phase: 'Future',
    period: 'Month 7-12',
    status: 'planned',
    icon: FiCalendar,
    items: [
      'GPS 아트',
      '체중/칼로리 연동',
      'Apple Watch 앱',
      '국제화 (영어, 일본어)',
    ],
  },
]

export default function Roadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-accent text-white'
      case 'in-progress':
        return 'bg-primary text-white'
      case 'planned':
        return 'bg-gray-400 text-white'
      default:
        return 'bg-gray-400 text-white'
    }
  }

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            개발 로드맵
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            지금까지의 진행 상황과 향후 계획을 확인하세요
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmap.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${getStatusColor(phase.status)} rounded-full p-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {phase.phase}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{phase.period}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(phase.status)}`}>
                      {phase.status === 'completed' && '완료'}
                      {phase.status === 'in-progress' && '진행 중'}
                      {phase.status === 'planned' && '계획'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="text-accent">✓</span>
                      <span className="text-gray-700 dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                {phase.status === 'in-progress' && (
                  <div className="mt-6">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">진행률: 50%</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

